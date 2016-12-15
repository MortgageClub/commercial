module Closings
  class DetailSerializer < BaseSerializer
    has_many :documents, serializer: Documents::DetailSerializer
  end
end
