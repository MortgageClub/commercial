class AssignedLoanMember < ApplicationRecord
  belongs_to :loan
  belongs_to :loan_member
  belongs_to :loan_member_title

  validates :loan, presence: true
  validates :loan_member, presence: true
  validates :loan_member_title, presence: true
end
