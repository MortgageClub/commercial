module Registrations
  module V1
    class Create < Service
      def process
        new_user = User.new(user_params)
        new_user.provider = "email"
        new_user.referral_code = Users::V1::ReferralCodeGenerator.generate
        new_user.email = user_params[:email].try :downcase

        if referral_code = cookies["ref_code"]
          new_user.referred_code = referral_code.upcase
          handle_referral_user(new_user, referral_code)
        end

        ActiveRecord::Base.transaction do
          borrower = Borrower.new(user: new_user, phone: params[:phone])
          
          begin
            if borrower.save
              if loan_data = cookies["loan_data"]
                handle_new_loan(borrower)
              end
              UserMailer.welcome(new_user).deliver_later
              data_user = new_user.token_validation_response
              data_user["size_of_loans"] = new_user.subjectable.loans.count

              result.new(
                data_user,
                new_user.create_new_auth_token
              )
            else
              raise ValidateError.new(new_user.errors.full_messages)
            end
          rescue ActiveRecord::RecordInvalid
            raise ValidateError.new(new_user.errors.full_messages)
          end
        end
      end

      def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end

      private

      def handle_referral_user(new_user, referral_code)
        referral_user = User.where(referral_code: referral_code.upcase).first

        return unless referral_user.present?

        invited_referral = InvitedReferral.find_or_initialize_by(email: new_user.email, user_id: referral_user.id)
        invited_referral.joined_at = Time.zone.now
        invited_referral.save
      end

      def handle_new_loan(borrower)
        loan_params = JSON.load cookies["loan_data"]
        address_params = loan_params["address"]

        relationship_manager_title = LoanMemberTitle.find_by_title("Relationship Manager")
        loan_member = User.find_by_email("dane.chodos@blacklinelending.com").try(:subjectable)
        assigned_loan_member = nil

        if loan_member && relationship_manager_title
          assigned_loan_member = AssignedLoanMember.new(loan_member: loan_member, loan_member_title: relationship_manager_title)
        end

        loan = Loan.new
        loan.property = Property.new(
          full_address: loan_params["address"]
        ),
        loan.closing = Closing.new
        loan.guarantor = Guarantor.new
        loan.amount = params["loan_amount"].gsub(/[$,]/,'').to_f
        loan.purpose = params["purpose"]
        loan.note = params["detail"]
        loan.status = :new_loan
        loan.assigned_loan_members = [assigned_loan_member] if assigned_loan_member.present?
        loan.borrower = borrower

        loan.save!
      end

      def result
        Struct.new(:user, :headers)
      end
    end
  end
end