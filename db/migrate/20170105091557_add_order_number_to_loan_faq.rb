class AddOrderNumberToLoanFaq < ActiveRecord::Migration[5.0]
  def change
    add_column :loan_faqs, :order_number, :integer
  end
end
