class AddFieldsToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :estimated_value, :decimal, precision: 13, scale: 2
    add_column :properties, :appraised_value, :decimal, precision: 13, scale: 2
  end
end
