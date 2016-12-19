class SendReferralInvitationEmailJob < ApplicationJob
  queue_as :default

  def perform(user_id, invited_referral_ids)
    user = User.find_by_id(user_id)
    invited_referrals = InvitedReferral.where(id: invited_referral_ids)
    InvitedReferralMailer.send_invitation(user, invited_referrals).deliver_now
  end
end
