class CreateBussinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :bussinesses, id: :uuid do |t|
      t.string :name
      t.integer :years
      t.string :ein
      t.string :industry
      t.string :state
      t.integer :number_of_employees
      t.string :entity_type
      t.string :principal
      t.string :nature
      t.references :user, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
