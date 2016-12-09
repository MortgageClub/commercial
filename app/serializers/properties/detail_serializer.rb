module Properties
  class DetailSerializer < ActiveModel::Serializer
    attributes :id
    has_one :address
  end
end
