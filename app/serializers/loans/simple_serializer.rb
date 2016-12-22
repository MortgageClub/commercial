module Loans
  class SimpleSerializer < BaseSerializer
    default_include "property, property.address"

    attributes :id, :amount, :status, :property_address

    def status
      object.status.titleize
    end

    def amount
      ActiveSupport::NumberHelper.number_to_currency(object.amount.to_f, precision: 0)
    end

    def property_address
      object.property && object.property.address ? object.property.address.full_text : "Unknown Address"
    end
  end
end
