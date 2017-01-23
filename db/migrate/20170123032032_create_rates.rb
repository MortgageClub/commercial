class CreateRates < ActiveRecord::Migration[5.0]
  def change
    create_table :rates do |t|
      t.string :table_name
      t.string :rate_type
      t.decimal :today, precision: 13, scale: 5
      t.decimal :yesterday, precision: 13, scale: 5
      t.decimal :one_week_ago, precision: 13, scale: 5
      t.decimal :one_month_ago, precision: 13, scale: 5

      t.timestamps
    end
  end
end
