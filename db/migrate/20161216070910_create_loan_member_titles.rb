class CreateLoanMemberTitles < ActiveRecord::Migration[5.0]
  def change
    create_table :loan_member_titles, id: :uuid do |t|
      t.string :title

      t.timestamps
    end
  end
end
