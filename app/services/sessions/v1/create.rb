module Sessions
  module V1
    class Create < Service
      def process
        if params[:no_password]
          login_without_password
        else
          login_with_password
        end
      end

      private

      def result
        Struct.new(:user, :headers)
      end

      def login_with_password
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

      def login_without_password
        if session[:user_id]
          user_loan_member = User.find_by_id(session[:user_id])
          relationship_manager = LoanMemberTitle.find_by_title("Loan Advisor")
          loan_anlyst = LoanMemberTitle.find_by_title("Loan Analyst")

          borrower_ids = Loan.joins(:assigned_loan_members).where('assigned_loan_members.loan_member_id = ? and (assigned_loan_members.loan_member_title_id = ? or assigned_loan_members.loan_member_title_id = ?)', user_loan_member.subjectable_id, relationship_manager.try(:id), loan_anlyst.try(:id)).pluck(:borrower_id)

          if borrower_ids.include? params[:borrower_id]
            user_borrower = Borrower.find_by_id(params[:borrower_id]).user
            data_user = user_borrower.token_validation_response
            data_user["size_of_loans"] = user_borrower.subjectable.loans.count

            result.new(
              data_user,
              user_borrower.create_new_auth_token
            )
          else
            raise PermissionDenied
          end
        else
          raise PermissionDenied.new("Please login loan member before login as borrower")
        end
      end
    end
  end
end
