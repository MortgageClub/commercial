module Loans
  module V1
    class Create < Service
      require_authen!

      def process
        relationship_manager_title = LoanMemberTitle.find_by_title("Relationship Manager")
        loan_member = User.find_by_email("dane.chodos@blacklinelending.com").try(:subjectable)
        assigned_loan_member = nil

        if loan_member && relationship_manager_title
          assigned_loan_member = AssignedLoanMember.new(loan_member: loan_member, loan_member_title: relationship_manager_title)
        end

        loan = Loan.new
        loan.property = Property.new(
          full_address: params[:loan][:address]
        )
        loan.closing = Closing.new
        loan.guarantor = Guarantor.new
        loan.amount = params[:loan][:loan_amount].gsub(/[$,]/,'').to_f
        loan.purpose = params[:loan][:purpose]
        loan.note = params[:loan][:detail]
        loan.status = :new_loan
        loan.assigned_loan_members = [assigned_loan_member] if assigned_loan_member.present?
        loan.borrower = @user.subjectable

        loan.save!
      end
    end
  end
end
