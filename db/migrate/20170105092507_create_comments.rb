class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments, id: :uuid do |t|
      t.references :blog, index: true, foreign_key: true, type: :uuid
      t.string :name
      t.string :email
      t.string :content

      t.timestamps
    end
  end
end
