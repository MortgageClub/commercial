class InvitedReferralMailer < ApplicationMailer
  def send_invitation(user_id, invited_referral_ids)
    subject = "Mortgage Club has invited you to join Mortgage Club"
    @user = User.find_by_id(user_id)
    InvitedReferral.where(id: invited_referral_ids).each do |invited_referral|
      @invited_referral = invited_referral
      mail(to: @invited_referral.email, subject: subject)
    end
  end
end
