class Admins::InvitedReferralsController < Admins::BaseController
  before_action :set_referral, only: [:edit, :update]

  def index
    @q = InvitedReferral.ransack(params[:q])
    @referrals = @q.result.includes(:user).order(created_at: :desc).page(params[:page])
  end

  def update
    if @referral.update(referral_params)
      flash[:success] = "Update referral successfully!"
      return redirect_to admins_invited_referrals_path
    end

    render :edit
  end

  private

  def set_referral
    @referral = InvitedReferral.find(params[:id])
  end

  def referral_params
    params.require(:invited_referral).permit(
      :origination_fees,
      :bonus
    )
  end
end
