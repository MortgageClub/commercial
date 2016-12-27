class AddHeadlineToQuote < ActiveRecord::Migration[5.0]
  def change
    add_column :quotes, :headline, :string
  end
end
