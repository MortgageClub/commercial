class Advisors::LoansController < Advisors::BaseController
  # before_action :set_loan

  def index
    @q = Loan.ransack(params[:q])
    @loans = @q.result.page(params[:page])
  end

  private

  def set_loan
    @loan = Loan.find(params[:id])
  end
end
