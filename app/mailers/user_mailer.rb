class UserMailer < ApplicationMailer
  def welcome(user)
    @user = user
    mail(
      to: user.email,
      subject: "Welcome to Blackline Lending"
    )
  end

  def notify(user)
    @user = user

    mail(
      to: "info@blacklinelending.com",
      subject: "New Borrower for Blackline Lending"
    )
  end

  def reset_password(user, token)
    @url = "#{Rails.application.config.action_mailer.default_url_options[:host]}/change-password?token=#{token}"
    mail(
      to: user.email,
      subject: "Reset your password"
    )
  end
end
