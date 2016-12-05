class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties, id: :uuid do |t|
      t.decimal :purchase_price, precision: 13, scale: 2
      t.string :property_type
      t.string :title
      t.decimal :land_size, precision: 10, scale: 2
      t.integer :building_size
      t.integer :number_of_units
      t.integer :year_build
      t.integer :occup
      t.references :loan, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
