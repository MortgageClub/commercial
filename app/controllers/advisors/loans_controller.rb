class Advisors::LoansController < Advisors::BaseController
  # before_action :set_loan

  def index
    @q = Loan.ransack(params[:q])
    loan_member_title = LoanMemberTitle.find_by_title("Relationship Manager");

    @loans = @q.result.joins(:assigned_loan_members).where('assigned_loan_members.loan_member_id = ? and assigned_loan_members.loan_member_title_id = ?', current_user.subjectable_id, loan_member_title.try(:id)).page(params[:page])
  end

  private

  # def set_loan
  #   @loan = Loan.find(params[:id])
  # end
end
