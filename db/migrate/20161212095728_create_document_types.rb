class CreateDocumentTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :document_types, id: :uuid do |t|
      t.string :category
      t.string :name

      t.timestamps
    end
  end
end
