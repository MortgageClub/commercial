module Guarantors
  class DetailSerializer < BaseSerializer
    has_many :documents, serializer: Documents::DetailSerializer
  end
end
