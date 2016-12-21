class Advisors::LoansController < Advisors::BaseController
  def index
    @q = Loan.ransack(params[:q])
    relationship_manager = LoanMemberTitle.find_by_title("Relationship Manager")
    loan_anlyst = LoanMemberTitle.find_by_title("Loan Analyst")

    @loans = @q.result.joins(:assigned_loan_members).where('assigned_loan_members.loan_member_id = ? and (assigned_loan_members.loan_member_title_id = ? or assigned_loan_members.loan_member_title_id = ?)', current_user.subjectable_id, relationship_manager.try(:id), loan_anlyst.try(:id)).page(params[:page])
  end
end
