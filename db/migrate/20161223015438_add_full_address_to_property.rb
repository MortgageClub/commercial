class AddFullAddressToProperty < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :full_address, :string
  end
end
