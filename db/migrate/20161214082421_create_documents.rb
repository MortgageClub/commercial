class CreateDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :documents, id: :uuid do |t|
      t.attachment :attachment
      t.references :document_type, index: true, foreign_key: true, type: :uuid
      t.uuid :documentable_id
      t.string :documentable_type
      t.string :description
      t.string :original_filename
      t.uuid :checklist_id
      t.string :token

      t.timestamps
    end
  end
end
