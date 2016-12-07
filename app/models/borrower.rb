class Borrower < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy
  has_many :loans
end
