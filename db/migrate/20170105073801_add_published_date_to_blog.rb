class AddPublishedDateToBlog < ActiveRecord::Migration[5.0]
  def change
    add_column :blogs, :published_date, :datetime
  end
end
