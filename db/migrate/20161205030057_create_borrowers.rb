class CreateBorrowers < ActiveRecord::Migration[5.0]
  def change
    create_table :borrowers, id: :uuid do |t|
      t.string :mobile_phone
      t.string :phone
      t.string :ext
      t.string :street
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps
    end
  end
end
