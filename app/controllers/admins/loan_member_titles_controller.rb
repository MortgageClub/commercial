class Admins::LoanMemberTitlesController < Admins::BaseController
  before_action :set_loan_member_title, only: [:edit, :update, :destroy]

  def index
    @q = LoanMemberTitle.ransack(params[:q])
    @loan_member_titles = @q.result.page(params[:page])
  end

  def new
    @loan_member_title = LoanMemberTitle.new
  end

  def create
    @loan_member_title = LoanMemberTitle.new(loan_member_title_params)

    if @loan_member_title.save
      flash[:success] = "Create loan member title successfully!"
      return redirect_to admins_loan_member_titles_path
    end

    render :new
  end

  def update
    if @loan_member_title.update(loan_member_title_params)
      flash[:success] = "Update loan member title successfully!"
      return redirect_to admins_loan_member_titles_path
    end

    render :edit
  end

  def destroy
    @loan_member_title.destroy

    flash[:success] = "Delete loan member title successfully!"
    redirect_to admins_loan_member_titles_path
  end

  private

  def set_loan_member_title
    @loan_member_title = LoanMemberTitle.find(params[:id])
  end

  def loan_member_title_params
    params.require(:loan_member_title).permit(
      :title
    )
  end
end
