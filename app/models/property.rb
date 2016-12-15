class Property < ApplicationRecord
  has_one :address, as: :addressable
  belongs_to :loan
  has_many :documents, as: :documentable
end
