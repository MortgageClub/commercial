class CreateLoanFaqs < ActiveRecord::Migration[5.0]
  def change
    create_table :loan_faqs, id: :uuid do |t|
      t.string :question
      t.text :answer

      t.timestamps
    end
  end
end
