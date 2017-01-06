class ChecklistNotifyMailer < ApplicationMailer
  def notify_when_upload_document(checklist, loan)
    @checklist = checklist
    @borrower = loan.borrower.user

    loan.assigned_loan_members.each do |assigned_loan_member|
      title = assigned_loan_member.try(:loan_member_title).try(:title)
      next unless title == "Relationship Manager" || title == "Loan Analyst"

      @user = assigned_loan_member.loan_member.user
      mail(
        to: @user.email,
        subject: "#{@borrower.full_name} just upload document of checklist: #{@checklist.name}"
      )
    end
  end
end
