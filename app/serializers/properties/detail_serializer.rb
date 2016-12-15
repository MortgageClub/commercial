module Properties
  class DetailSerializer < BaseSerializer
    attributes :id
    has_one :address, serializer: Addresses::DetailSerializer
    has_many :documents, serializer: Documents::DetailSerializer
  end
end
