class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses, id: :uuid do |t|
      t.string :street_address
      t.string :street_address2
      t.string :city
      t.string :zip
      t.string :state
      t.string :unit_number
      t.string :full_text
      t.references :addressable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
