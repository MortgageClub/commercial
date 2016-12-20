class CreateSentEmails < ActiveRecord::Migration[5.0]
  def change
    create_table :sent_emails do |t|
      t.string :token
      t.string :receiver
      t.uuid :user_id
      t.uuid :loan_id
      t.string :subject
      t.text :content
      t.datetime :opened_at
      t.datetime :clicked_at

      t.timestamps
    end
  end
end
