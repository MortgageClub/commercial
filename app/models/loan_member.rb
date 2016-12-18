class LoanMember < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy

  accepts_nested_attributes_for :user

  def full_name
    user ? "#{user.first_name} #{user.last_name}" : "No Name"
  end
end
