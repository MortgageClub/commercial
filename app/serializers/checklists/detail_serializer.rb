module Checklists
  class DetailSerializer < BaseSerializer
    attributes :checklist_type, :due_date, :name, :information, :status, :document_description, :document_type_id, :id
    attribute :document_type, if: :has_document_type?

    def has_document_type?
      object.document_type_id.present?
    end

    def document_type
      DocumentTypes::DetailSerializer.new(DocumentType.find(object.document_type_id))
    end
  end
end
