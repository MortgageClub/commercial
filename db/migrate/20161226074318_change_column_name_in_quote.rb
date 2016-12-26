class ChangeColumnNameInQuote < ActiveRecord::Migration[5.0]
  def change
    rename_column :quotes, :quote_type, :name
  end
end
