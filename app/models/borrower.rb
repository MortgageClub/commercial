class Borrower < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy
  has_many :loans
  has_many :documents, as: :documentable

  def full_name
    user ? "#{user.first_name} #{user.last_name}" : "No Name"
  end
end
