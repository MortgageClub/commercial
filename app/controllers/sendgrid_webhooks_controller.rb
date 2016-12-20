class SendgridWebhooksController < ApplicationController
  before_action :validate_sendgrid, only: [:receive]

  SENDGRID_HEADER_VALUE = "BLLsSG!".freeze

  def receive
    if params["sendgrid_webhook"].present? && params["sendgrid_webhook"]["_json"].present?
      params["sendgrid_webhook"]["_json"].each do |webhook|
        case webhook["email_type"]
        when "loan_member_send"
          process_loan_member_send(webhook)
        end
      end
    end

    ap params["sendgrid_webhook"]
    head :ok
  end

  private

  def process_loan_member_send(webhook)
    sent_email = SentEmail.find_by(receiver: webhook["email"], token: webhook["token"])
    if sent_email
      sent_email.opened_at = Time.zone.now if webhook["event"] == "open"

      sent_email.clicked_at = Time.zone.now if webhook["event"] == "click"

      sent_email.save
    end
  end

  def validate_sendgrid
    return head :unauthorized if params[:code] != SENDGRID_HEADER_VALUE
  end
end