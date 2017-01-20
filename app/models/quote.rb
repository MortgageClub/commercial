class Quote < ApplicationRecord
  belongs_to :loan

  validates_uniqueness_of :name, scope: :loan_id

  enum name: {
    option_1: "option_1",
    option_2: "option_2",
    option_3: "option_3",
    option_4: "option_4"
  }

  enum status: {
    open: "open",
    selected: "selected"
  }
end
