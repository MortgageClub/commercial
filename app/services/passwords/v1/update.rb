module Passwords
  module V1
    class Update < Service
      def process
        reset_password_token = Devise.token_generator.digest(User, :reset_password_token, params[:reset_password_token])
        user = User.find_by_reset_password_token(reset_password_token)

        if user
          if params[:password] != params[:password_confirmation]
            raise ValidateError.new("Password confirmation doesn't match Password")
          else
            user.reset_password(params[:password], params[:password_confirmation])

            result.new(
              user.token_validation_response,
              user.create_new_auth_token
            )
          end
        else
          raise NotFound.new("Token is invalid")
        end
      end

      def result
        Struct.new(:user, :headers)
      end
    end
  end
end
