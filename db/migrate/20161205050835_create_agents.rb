class CreateAgents < ActiveRecord::Migration[5.0]
  def change
    create_table :agents, id: :uuid do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.references :loan, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
