class AddLenderToQuote < ActiveRecord::Migration[5.0]
  def change
    add_column :quotes, :lender, :string
  end
end
