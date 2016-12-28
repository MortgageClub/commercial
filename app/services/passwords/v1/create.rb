module Passwords
  module V1
    class Create < Service
      def process
        user = User.find_by_email(params[:email])

        if user && user.subjectable_type == "Borrower"
          token = set_reset_password_token(user)
          send_reset_password_instructions_notification(user, token)
        else
          raise NotFound.new("Email is not found")
        end
      end

      private

      def set_reset_password_token(user)
        raw, enc = Devise.token_generator.generate(User, :reset_password_token)

        user.reset_password_token = enc
        user.reset_password_sent_at = Time.now.utc
        user.save(validate: false)

        raw
      end

      def send_reset_password_instructions_notification(user, token)
        UserMailer.reset_password(user, token).deliver_later
      end
    end
  end
end
