module Registrations
  module V1
    class Create < Service
      def process
        new_user = User.new(user_params)
        new_user.provider = "email"
        new_user.referral_code = Users::V1::ReferralCodeGenerator.generate

        if User.case_insensitive_keys.include?(:email)
          new_user.email = user_params[:email].try :downcase
        else
          new_user.email = user_params[:email]
        end

        if referral_code = cookies["ref_code"]
          new_user.referred_code = referral_code.upcase
          handle_referral_user(new_user, referral_code)
        end

        ActiveRecord::Base.transaction do
          borrower = Borrower.new(user: new_user)

          begin
            if borrower.save
              if loan_data = cookies["loan_data"]
                handle_new_loan(borrower)
              end

              result.new(
                new_user.token_validation_response,
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

        invited_referral = InvitedReferral.where(email: new_user.email, user_id: referral_user.id)
        invited_referral.update(joined_at: Time.zone.now)
      end

      def handle_new_loan(borrower)
        loan_params = JSON.load cookies["loan_data"]
        address_params = loan_params["address"]

        borrower.loans.create!(
          property: Property.new(
            full_address: loan_params["address"]
          ),
          closing: Closing.new,
          guarantor: Guarantor.new,
          amount: loan_params["loan_amount"].gsub(/[$,]/,'').to_f,
          purpose: loan_params["purpose"],
          note: loan_params["detail"],
          status: :new_loan
        )
      end

      def result
        Struct.new(:user, :headers)
      end
    end
  end
end