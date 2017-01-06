class AddFieldsToInvitedReferral < ActiveRecord::Migration[5.0]
  def change
    add_column :invited_referrals, :bonus, :decimal, precision: 13, scale: 2
    add_column :invited_referrals, :origination_fees, :decimal, precision: 13, scale: 2
  end
end
