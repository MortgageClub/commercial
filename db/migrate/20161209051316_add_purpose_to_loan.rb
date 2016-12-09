class AddPurposeToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :purpose, :string
  end
end
