class Admins::LoanFaqsController < Admins::BaseController
  before_action :set_loan_faq, only: [:edit, :update, :destroy]

  def index
    @q = LoanFaq.ransack(params[:q])
    @loan_faqs = @q.result.page(params[:page])
  end

  def new
    @loan_faq = LoanFaq.new
  end

  def create
    @loan_faq = LoanFaq.new(loan_faq_params)

    if @loan_faq.save
      flash[:success] = "Create loan faq successfully!"
      return redirect_to admins_loan_faqs_path
    end

    render :new
  end

  def update
    if @loan_faq.update(loan_faq_params)
      flash[:success] = "Update loan faq successfully!"
      return redirect_to admins_loan_faqs_path
    end

    render :edit
  end

  def destroy
    @loan_faq.destroy

    flash[:success] = "Delete loan faq successfully!"
    redirect_to admins_loan_faqs_path
  end

  private

  def set_loan_faq
    @loan_faq = LoanFaq.find(params[:id])
  end

  def loan_faq_params
    params.require(:loan_faq).permit(
      :question,
      :answer
    )
  end
end
