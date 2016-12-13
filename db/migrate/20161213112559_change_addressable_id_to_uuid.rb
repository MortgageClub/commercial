class ChangeAddressableIdToUuid < ActiveRecord::Migration[5.0]
  def change
    remove_column :addresses, :addressable_id, :integer
    add_column :addresses, :addressable_id, :uuid
  end
end
