module Loans
  class DetailSerializer < ActiveModel::Serializer
    attributes :id, :amount, :status
    has_one :property, serializer: Properties::DetailSerializer
    has_many :checklists, serializer: Checklists::DetailSerializer

    def status
      object.status.titleize
    end
  end
end
