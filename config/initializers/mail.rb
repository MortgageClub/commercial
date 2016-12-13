unless Rails.env.test?
  ActionMailer::Base.smtp_settings = {
    user_name: ENV["SENDGRID_USERNAME"],
    password: ENV["SENDGRID_PASSWORD"],
    address: 'smtp.sendgrid.net',
    port: 587,
    authentication: :plain,
    enable_starttls_auto: true
  }

  ActionMailer::Base.delivery_method = :smtp
  ActionMailer::Base.default charset: "utf-8"
end
