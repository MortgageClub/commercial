class Borrower < ApplicationRecord
  has_one :user, as: :subjectable
  has_many :loans
end
