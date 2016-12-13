class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists, id: :uuid do |t|
      t.references :loan, index: true, foreign_key: true, type: :uuid
      t.string :checklist_type
      t.datetime :due_date
      t.string :name
      t.string :information
      t.string :status
      t.string :document_description
      t.uuid :document_type_id

      t.timestamps
    end
  end
end
