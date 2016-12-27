class QuickContactMailer < ApplicationMailer
  def send_email(params)
    @params = params
    mail(
      from: "admin@blacklinelending.com",
      to: "info@blacklinelending.com",
      subject: "Web inquiry"
    )
  end
end
