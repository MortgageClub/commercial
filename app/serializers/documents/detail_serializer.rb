module Documents
  class DetailSerializer < BaseSerializer
    attributes :description, :id, :attachment_url, :original_filename, :updated_at

    def description
      "#{object.document_type.name} - #{object.description}"
    end

    def attachment_url
      object.attachment.expiring_url(300)
    end

    def updated_at
      object.updated_at ? object.updated_at.strftime("%m/%d/%Y") : ""
    end
  end
end
