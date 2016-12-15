class CreateGuarantors < ActiveRecord::Migration[5.0]
  def change
    create_table :guarantors, id: :uuid do |t|
      t.references :loan, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
