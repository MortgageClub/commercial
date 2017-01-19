require 'securerandom'

class Advisors::SentEmailsController < Advisors::BaseController
  before_action :set_loan
  before_action :prepare_data, only: [:index]

  def index
    @q = SentEmail.ransack(params[:q])
    @sent_emails = @q.result.where(user_id: current_user.id, loan_id: params[:loan_id]).page(params[:page])
  end

  def create
    uuid = SecureRandom.uuid
    LoanMemberDashboardMailer.send_email(params, uuid).deliver_now

    SentEmail.create(
      receiver: params[:receiver],
      token: uuid,
      subject: params[:subject],
      content: params[:content],
      user_id: current_user.id,
      loan_id: params[:loan_id]
    )

    flash.now[:success] = "Send email successfully."
    redirect_to advisors_loan_sent_emails_path(@loan)
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end

  def prepare_data
    prepare_templates
    prepare_receivers
  end

  def prepare_templates
    @email_templates = []

    @first_name = @loan.borrower.user.first_name
    @borrower = @loan.borrower
    
    @url_token = generate_user_token(@loan, @loan.borrower.user)

    default_template = render_to_string "email_templates/default", layout: false
    new_account_with_quotes = render_to_string "email_templates/new_account_with_quotes", layout: false
    
    @email_templates << {
      name: "Default Template",
      content: default_template
    }

    @email_templates << {
      name: "New Account With Quotes",
      content: new_account_with_quotes
    }

    @email_templates
  end

  def prepare_receivers
    @receivers = []

    @receivers << {
      email: @loan.borrower.user.email,
      name: "Borrower <#{@loan.borrower.user.email}>"
    }

    AssignedLoanMember.where(loan: @loan).includes(:loan_member_title, loan_member: :user).each do |assigned_loan_member|
      @receivers << {
        email: assigned_loan_member.loan_member.user.email,
        name: "#{assigned_loan_member.loan_member_title.title} <#{assigned_loan_member.loan_member.user.email}>"
      }
    end
  end

  def generate_user_token(loan, user)
    if user.reset_password_token.nil?
      token, enc = Devise.token_generator.generate(User, :reset_password_token)

      user.reset_password_token = enc
      user.reset_password_sent_at = Time.now.utc
      user.save(validate: false)
      loan.update(prepared_loan_token: token)
    end

    "#{Rails.application.config.action_mailer.default_url_options[:host]}/change-password?token=#{loan.prepared_loan_token}"
  end
end
