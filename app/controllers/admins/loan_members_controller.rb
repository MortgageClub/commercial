class Admins::LoanMembersController < Admins::BaseController
  before_action :set_loan_member, only: [:edit, :update, :destroy]

  def index
    @q = LoanMember.ransack(params[:q])
    @loan_members = @q.result.includes(:user).page(params[:page])
  end

  def new
    @loan_member = LoanMember.new
    @loan_member.build_user
  end

  def create
    @loan_member = LoanMember.new(loan_member_params)

    if @loan_member.save
      flash[:success] = "Create loan member successfully!"
      return redirect_to admins_loan_members_path
    end

    render :new
  end

  def update
    if @loan_member.update(loan_member_params)
      flash[:success] = "Update loan member successfully!"
      return redirect_to admins_loan_members_path
    end

    render :edit
  end

  def destroy
    @loan_member.destroy

    flash[:success] = "Delete loan member successfully!"
    redirect_to admins_loan_members_path
  end

  private

  def set_loan_member
    @loan_member = LoanMember.find(params[:id])
  end

  def loan_member_params
    params.require(:loan_member).permit(
      :phone_number,
      :individual_bre,
      :company_name,
      :company_address,
      :company_phone_number,
      :company_bre,
      :email_signature,
      user_attributes: [
        :first_name,
        :last_name,
        :email,
        :password,
        :avatar,
        :author_bio,
        :id
      ]
    )
  end
end
