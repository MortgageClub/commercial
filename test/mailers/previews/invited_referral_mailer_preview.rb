# Preview all emails at http://localhost:3000/rails/mailers/invited_referral_mailer
class InvitedReferralMailerPreview < ActionMailer::Preview
  def send_invitation_preview
    user = User.first
    InvitedReferralMailer.send_invitation(user.id, user.invited_referrals.last.id)
  end
end
