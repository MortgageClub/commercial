module Properties
  class DetailSerializer < BaseSerializer
    attributes :id
    has_one :address, serializer: Addresses::DetailSerializer
  end
end
