class CreateLoans < ActiveRecord::Migration[5.0]
  def change
    create_table :loans, id: :uuid do |t|
      t.decimal :down_payment
      t.decimal :amount
      t.boolean :is_under_contract
      t.datetime :closing_date
      t.text :notes
      t.references :borrower, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
