class CreateAssignedLoanMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :assigned_loan_members, id: :uuid do |t|
      t.references :loan, index: true, foreign_key: true, type: :uuid
      t.references :loan_member, index: true, foreign_key: true, type: :uuid
      t.references :loan_member_title, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
