class CreateBussinessInformations < ActiveRecord::Migration[5.0]
  def change
    create_table :bussiness_informations, id: :uuid do |t|
      t.string :name
      t.integer :years
      t.string :ein
      t.string :industry
      t.string :state
      t.integer :number_of_employees
      t.string :entity_type
      t.string :principal
      t.string :nature
      t.uuid :user_id

      t.timestamps
    end
  end
end
