class AddNoteToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :note, :string
  end
end
