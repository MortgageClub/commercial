class Closing < ApplicationRecord
  belongs_to :loan
  has_many :documents, as: :documentable
end
