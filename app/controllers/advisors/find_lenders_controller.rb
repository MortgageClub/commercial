class Advisors::FindLendersController < Advisors::BaseController
  before_action :set_loan

  def new
    
  end

  def create
    @results = Public::PlacesApi.new(params[:search], params[:address]).call
    
    render :new
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end
end
