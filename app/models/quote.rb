class Quote < ApplicationRecord
  belongs_to :loan

  validates :name, uniqueness: true

  enum name: {
    highest_ltv: "highest_ltv",
    lowest_payment: "lowest_payment",
    lowest_rate: "lowest_rate"
  }

  enum status: {
    open: "open",
    selected: "selected"
  }
end
