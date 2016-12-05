class Loan < ApplicationRecord
  belongs_to :borrower
  has_one :property
  has_one :agent
end
