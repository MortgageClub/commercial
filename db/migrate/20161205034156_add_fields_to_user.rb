class AddFieldsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :subjectable_id, :uuid
    add_column :users, :subjectable_type, :string

    add_index :users, [:subjectable_type, :subjectable_id]
  end
end
