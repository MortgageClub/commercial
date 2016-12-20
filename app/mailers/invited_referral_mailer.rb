class InvitedReferralMailer < ApplicationMailer
  def send_invitation(user, invited_referrals)
    subject = "Mortgage Club has invited you to join Mortgage Club"
    @user = user
    invited_referrals.each do |invited_referral|
      @invited_referral = invited_referral
      mail(to: @invited_referral.email, subject: subject)
    end
  end
end
