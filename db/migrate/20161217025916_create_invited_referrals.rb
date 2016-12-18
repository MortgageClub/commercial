class CreateInvitedReferrals < ActiveRecord::Migration[5.0]
  def change
    create_table :invited_referrals do |t|
      t.references :user, index: true, foreign_key: true, type: :uuid
      t.string :email, default: ''
      t.string :name, default: ''
      t.datetime :joined_at, default: nil

      t.timestamps
    end
  end
end
