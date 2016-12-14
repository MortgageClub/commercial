module Loans
  class DetailSerializer < BaseSerializer
    default_include "property, property.address, checklists"

    attributes :id, :amount, :status, :purpose
    has_one :property, serializer: Properties::DetailSerializer
    has_many :checklists, serializer: Checklists::DetailSerializer

    def status
      object.status.titleize
    end

    def purpose
      object.purpose.titleize
    end
  end
end
