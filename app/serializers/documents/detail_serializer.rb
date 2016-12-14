module Documents
  class DetailSerializer < BaseSerializer
    attributes :description, :id, :attachment_url

    def description
      "#{object.document_type.name} - #{object.description}"
    end

    def attachment_url
      object.attachment.expiring_url(300)
    end
  end
end
