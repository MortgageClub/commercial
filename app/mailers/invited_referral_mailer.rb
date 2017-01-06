class InvitedReferralMailer < ApplicationMailer
  def send_invitation(user, invited_referrals)
    subject = "#{user.full_name} has invited you to check out Blackline Lending"
    @user = user
    @loan_member = User.find_by_email("dane.chodos@blacklinelending.com")
    invited_referrals.each do |invited_referral|
      @invited_referral = invited_referral
      mail(to: @invited_referral.email, subject: subject)
    end
  end
end
