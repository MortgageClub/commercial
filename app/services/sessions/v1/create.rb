module Sessions
  module V1
    class Create < Service
      def process
        user = User.find_by_email(params[:email])

        if user && user.valid_password?(params[:password]) && user.subjectable_type == "Borrower"
          data_user = user.token_validation_response
          data_user["size_of_loans"] = user.subjectable.loans.count

          result.new(
            data_user,
            user.create_new_auth_token
          )
        else
          raise BadCredentials
        end
      end

      def result
        Struct.new(:user, :headers)
      end
    end
  end
end
