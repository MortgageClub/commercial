module Properties
  class DetailSerializer < BaseSerializer
    attributes :id, :property_type, :estimated_value, :appraised_value

    has_many :documents, serializer: Documents::DetailSerializer

    def estimated_value
      object.estimated_value ? ActiveSupport::NumberHelper.number_to_currency(object.estimated_value.to_f, precision: 0) : nil
    end

    def appraised_value
      object.appraised_value ? ActiveSupport::NumberHelper.number_to_currency(object.appraised_value.to_f, precision: 0) : nil
    end
  end
end
