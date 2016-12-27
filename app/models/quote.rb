class Quote < ApplicationRecord
  belongs_to :loan

  validates :name, uniqueness: true

  enum name: {
    option_1: "option_1",
    option_2: "option_2",
    option_3: "option_3"
  }

  enum status: {
    open: "open",
    selected: "selected"
  }
end
