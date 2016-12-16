class LoanMember < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy

  accepts_nested_attributes_for :user
end
