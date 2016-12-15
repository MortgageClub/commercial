class Borrower < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy
  has_many :loans
  has_many :documents, as: :documentable
end
