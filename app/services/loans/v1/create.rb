module Loans
  module V1
    class Create < Service
      require_authen!

      def process
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
          full_address: params[:loan][:address]
        )
        loan.closing = Closing.new
        loan.guarantor = Guarantor.new
        loan.amount = params[:loan][:loan_amount].gsub(/[$,]/,'').to_f
        loan.purpose = params[:loan][:purpose]
        loan.note = params[:loan][:detail]
        loan.status = :due_diligence
        loan.assigned_loan_members = assigned_loan_members if assigned_loan_members.present?
        loan.borrower = @user.subjectable
        loan.headline_1 = "GREAT WORK!"
        loan.headline_2 = "Your Loan Advisor will reach out to you soon for a 5-minutes consultation call as part of our diligence process."

        loan.save!
      end
    end
  end
end
