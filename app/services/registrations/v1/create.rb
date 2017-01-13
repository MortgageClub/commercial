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
            if new_user.valid? && borrower.save
              if loan_data = cookies["loan_data"]
                handle_new_loan(borrower)
              end
              UserMailer.welcome(new_user).deliver_later
              UserMailer.notify(new_user).deliver_later

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

        loan_advisor_title = LoanMemberTitle.find_by_title("Loan Advisor")
        loan_advisor = User.find_by_email("dane.chodos@blacklinelending.com").try(:subjectable)

        loan_analyst_title = LoanMemberTitle.find_by_title("Loan Analyst")
        loan_analyst = User.find_by_email("billy.tran@blacklinelending.com").try(:subjectable)

        assigned_loan_members = []

        if loan_advisor && loan_advisor_title
          assigned_loan_members << AssignedLoanMember.new(loan_member: loan_advisor, loan_member_title: loan_advisor_title)
        end

        if loan_analyst && loan_analyst_title
          assigned_loan_members << AssignedLoanMember.new(loan_member: loan_analyst, loan_member_title: loan_analyst_title)
        end

        loan = Loan.new
        loan.property = Property.new(
          full_address: loan_params["address"]
        )
        loan.closing = Closing.new
        loan.guarantor = Guarantor.new
        loan.amount = loan_params["loan_amount"].gsub(/[$,]/,'').to_f
        loan.purpose = loan_params["purpose"]
        loan.note = loan_params["detail"]
        loan.status = :due_diligence
        loan.assigned_loan_members = assigned_loan_members if assigned_loan_members.present?
        loan.borrower = borrower
        loan.headline_1 = "GREAT WORK!"
        loan.headline_2 = "Your Loan Advisor will reach out to you soon for a 5-minutes consultation call as part of our diligence process."

        loan.save!
      end

      def result
        Struct.new(:user, :headers)
      end
    end
  end
end