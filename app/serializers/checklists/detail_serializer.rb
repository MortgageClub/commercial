module Checklists
  class DetailSerializer < BaseSerializer
    attributes :checklist_type, :due_date, :name, :information, :status, :document_description, :document_type_id, :id
    attribute :document_type, if: :has_document_type?
    attribute :document, if: :has_document?

    def has_document?
      object.document.present?
    end

    def document
      Documents::DetailSerializer.new(object.document)
    end

    def has_document_type?
      object.document_type_id.present?
    end

    def document_type
      DocumentTypes::DetailSerializer.new(DocumentType.find(object.document_type_id))
    end

    def due_date
      object.due_date ? object.due_date.strftime("%m/%d/%Y") : ""
    end
  end
end
