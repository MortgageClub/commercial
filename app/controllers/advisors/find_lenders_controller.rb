class Advisors::FindLendersController < Advisors::BaseController
  before_action :set_loan

  def new
  end

  def create
    @results = Public::PlacesApi.new(params[:search], params[:address]).call
    addresses = @results.map { |result| result["formatted_address"] }
    uuid = SecureRandom.uuid
    FindLendersInLoopNet.perform_later(addresses, uuid)

    redirect_to action: :new, uuid: uuid
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end
end
