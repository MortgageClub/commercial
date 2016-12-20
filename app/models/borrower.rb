class Borrower < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy
  has_many :loans
  has_many :documents, as: :documentable

  def full_name
    user ? user.full_name : "No Name"
  end
end
