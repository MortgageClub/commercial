class Admins::InvitedReferralsController < Admins::BaseController
  before_action :set_referral, only: [:edit, :update, :destroy]
  before_action :set_users, only: [:edit, :update, :new, :create]

  def index 
    @q = InvitedReferral.ransack(params[:q])
    @referrals = @q.result.includes(:user).order(created_at: :desc).page(params[:page])
  end

  def new
    @referral = InvitedReferral.new
  end

  def create
    @referral = InvitedReferral.new(referral_params)

    if @referral.save
      flash[:success] = "Create referral successfully!"
      return redirect_to admins_invited_referrals_path
    end

    render :new
  end

  def update
    if @referral.update(referral_params)
      flash[:success] = "Update referral successfully!"
      return redirect_to admins_invited_referrals_path
    end

    render :edit
  end

  def destroy
    @referral.destroy

    flash[:success] = "Delete referral successfully!"
    redirect_to admins_invited_referrals_path
  end

  private

  def set_referral
    @referral = InvitedReferral.find(params[:id])
  end

  def set_users
    @users = User.where(subjectable_type: "Borrower")
  end

  def referral_params
    params.require(:invited_referral).permit(
      :user_id,
      :name,
      :email,
      :phone,
      :joined_at,
      :origination_fees,
      :bonus
    )
  end
end
