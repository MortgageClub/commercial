class AddStatusToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :status, :string
  end
end
