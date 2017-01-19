class AddPreparedLoanTokenToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :prepared_loan_token, :string
  end
end
