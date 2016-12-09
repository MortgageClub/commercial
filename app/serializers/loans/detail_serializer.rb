module Loans
  class DetailSerializer < ActiveModel::Serializer
    attributes :id, :amount
    has_one :property, serializer: Properties::DetailSerializer
  end
end
