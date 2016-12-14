module Checklists
  class DetailSerializer < ActiveModel::Serializer
    attributes :checklist_type, :due_date, :name, :information, :status, :document_description, :document_type_id, :id
  end
end
