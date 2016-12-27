module Loans
  module V1
    class Create < Service
      require_authen!

      def process
        # relationship_manager_title = LoanMemberTitle.find_by_title("Relationship Manager")
        # loan_member = User.find_by_email("dane.chodos@blacklinelending.com").try(:subjectable)

        # if loan_member && relationship_manager_title
        #   assigned_loan_member = AssignedLoanMember.new(loan_member: loan_member, loan_member_title: relationship_manager_title)
        # end

        @user.subjectable.loans.create!(
          property: Property.new(
            full_address: params[:loan][:address]
          ),
          closing: Closing.new,
          guarantor: Guarantor.new,
          amount: params[:loan][:loan_amount].gsub(/[$,]/,'').to_f,
          purpose: params[:loan][:purpose],
          note: params[:loan][:detail],
          status: :new_loan
        )
      end
    end
  end
end
