module Loans
  class SimpleSerializer < BaseSerializer
    default_include "property"

    attributes :id, :amount, :status, :property_address, :property_image

    def status
      object.status.titleize
    end

    def amount
      ActiveSupport::NumberHelper.number_to_currency(object.amount.to_f, precision: 0)
    end

    def property_address
      object.property ? object.property.full_address : "Unknown Address"
    end

    def property_image
      object.property && object.property.image.present? ? object.property.image.expiring_url(10, :medium) : "/images/property_avatar.png"
    end
  end
end
