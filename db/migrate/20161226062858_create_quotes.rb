class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.references :loan, index: true, foreign_key: true, type: :uuid
      t.string :status
      t.string :quote_type
      t.decimal :interest_rate, precision: 13, scale: 5
      t.decimal :ltv, precision: 13, scale: 5
      t.integer :year_term
      t.integer :year_amortization
      t.decimal :payment, precision: 13, scale: 2
      t.decimal :loan_amount, precision: 13, scale: 2

      t.timestamps
    end
  end
end
