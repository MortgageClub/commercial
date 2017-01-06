class AddBlacklineNoteToLoan < ActiveRecord::Migration[5.0]
  def change
    remove_column :loans, :down_payment
    remove_column :loans, :is_under_contract
    remove_column :loans, :closing_date
    remove_column :loans, :notes
    drop_table :addresses

    add_column :loans, :blackline_note, :string
    add_column :loans, :headline_1, :string
    add_column :loans, :headline_2, :string
  end
end
