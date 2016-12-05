class Property < ApplicationRecord
  has_one :address, as: :addressable
  belongs_to :loan
end
