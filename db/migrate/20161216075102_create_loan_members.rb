class CreateLoanMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :loan_members, id: :uuid do |t|
      t.string :phone_number
      t.string :individual_bre
      t.string :company_name
      t.string :company_address
      t.string :company_phone_number
      t.string :company_bre
      t.text :email_signature

      t.timestamps
    end
  end
end
