class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs, id: :uuid do |t|
      t.string :title
      t.text :content
      t.string :category
      t.string :short_description

      t.timestamps
    end
  end
end
