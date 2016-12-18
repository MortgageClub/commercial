class AddPhoneToInvitedReferrals < ActiveRecord::Migration[5.0]
  def change
    add_column :invited_referrals, :phone, :string
  end
end
