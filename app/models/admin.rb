class Admin < ApplicationRecord
  has_one :user, as: :subjectable, dependent: :destroy
end
