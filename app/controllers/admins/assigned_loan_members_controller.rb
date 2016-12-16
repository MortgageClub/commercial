class Admins::AssignedLoanMembersController < Admins::BaseController
  before_action :set_assigned_loan_member, only: [:edit, :update, :destroy]
  before_action :prepare_data, only: [:new, :create, :edit, :update]

  def index
    @q = AssignedLoanMember.ransack(params[:q])
    @assigned_loan_members = @q.result.page(params[:page])
  end

  def new
    @assigned_loan_member = AssignedLoanMember.new
  end

  def create
    @assigned_loan_member = AssignedLoanMember.new(assigned_loan_member_params)

    if @assigned_loan_member.save
      flash[:success] = "Assign loan member successfully!"
      return redirect_to admins_assigned_loan_members_path
    end

    render :new
  end

  def update
    if @assigned_loan_member.update(assigned_loan_member_params)
      flash[:success] = "Re-assign loan member successfully!"
      return redirect_to admins_assigned_loan_members_path
    end

    render :edit
  end

  def destroy
    @assigned_loan_member.destroy

    flash[:success] = "Unsign loan member successfully!"
    redirect_to admins_assigned_loan_members_path
  end

  private

  def  prepare_data
    @loan_member_titles = LoanMemberTitle.all
    @loan_members = LoanMember.all
    @loans = Loan.all
  end

  def set_assigned_loan_member
    @assigned_loan_member = AssignedLoanMember.find(params[:id])
  end

  def assigned_loan_member_params
    params.require(:assigned_loan_member).permit(
      :loan_id,
      :loan_member_id,
      :loan_member_title_id
    )
  end
end
