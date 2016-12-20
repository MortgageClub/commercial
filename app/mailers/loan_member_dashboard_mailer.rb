
class LoanMemberDashboardMailer < ActionMailer::Base
  include SendGrid

  def send_email(params, uuid)
    sendgrid_unique_args email_type: "loan_member_send", token: uuid

    mail_params = {
      from: params[:from],
      to: params[:receiver],
      bcc: params[:bcc],
      cc: params[:cc],
      subject: params[:subject]
    }

    @body = params[:content]

    if params[:attachments].present?
      params[:attachments].each do |attachment|
        attachments[attachment.original_filename] = File.read(attachment.tempfile)
      end
    end

    mail(mail_params)
  end
end
