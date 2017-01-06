class Advisors::QuotesController < Advisors::BaseController
  before_action :set_loan
  before_action :set_quote, only: [:edit, :update, :destroy]

  def index
    @q = Quote.ransack(params[:q])
    @quotes = @q.result.where(loan: @loan).page(params[:page])
  end

  def new
    @quote = @loan.quotes.build
  end

  def create
    @quote = @loan.quotes.build(quote_params)

    if @quote.save
      flash[:success] = "Create quote successfully!"
      return redirect_to advisors_loan_quotes_path
    end

    render :new
  end

  def update
    if @quote.update(quote_params)
      flash[:success] = "Update quote successfully!"
      return redirect_to advisors_loan_quotes_path
    end

    render :edit
  end

  def destroy
    @quote.destroy

    flash[:success] = "Delete quote successfully!"
    redirect_to advisors_loan_quotes_path
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(
      :name,
      :status,
      :loan_amount,
      :headline,
      :interest_rate,
      :payment,
      :ltv,
      :year_term,
      :year_amortization,
      :lender
    )
  end
end
