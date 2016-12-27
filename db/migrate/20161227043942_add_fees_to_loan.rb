class AddFeesToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :survey_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :net_operating_income, :decimal, precision: 13, scale: 2
    add_column :loans, :dcsr, :decimal, precision: 13, scale: 2
  end
end
