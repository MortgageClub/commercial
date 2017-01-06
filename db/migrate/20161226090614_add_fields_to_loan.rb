class AddFieldsToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :ltv, :decimal, precision: 13, scale: 5
    add_column :loans, :interest_rate_spread, :integer
    add_column :loans, :interest_rate_index, :string
    add_column :loans, :fixed_rate_period, :integer
    add_column :loans, :term, :integer
    add_column :loans, :amortization, :integer
    add_column :loans, :prepayment_premium, :string
    add_column :loans, :origination_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :processing_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :underwritting_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :appraisal_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :phase_1_fees, :decimal, precision: 13, scale: 2
    add_column :loans, :site_visit_expense, :decimal, precision: 13, scale: 2
    add_column :loans, :legal_expense, :decimal, precision: 13, scale: 2
  end
end
