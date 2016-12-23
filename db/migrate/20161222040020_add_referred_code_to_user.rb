class AddReferredCodeToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :referred_code, :string
  end
end
