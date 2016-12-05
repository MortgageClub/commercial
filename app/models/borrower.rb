class Borrower < ApplicationRecord
  has_one :user, as: :subjectable
end
