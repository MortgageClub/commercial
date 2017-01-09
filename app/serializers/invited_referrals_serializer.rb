class InvitedReferralsSerializer < BaseSerializer
  attributes :id, :name, :email, :phone, :joined_at, :bonus, :origination_fees

  def bonus
    object.bonus ? ActiveSupport::NumberHelper.number_to_currency(object.bonus.to_f, precision: 0) : nil
  end

  def origination_fees
    object.origination_fees ? ActiveSupport::NumberHelper.number_to_currency(object.origination_fees.to_f, precision: 0) : nil
  end

  def joined_at
    object.joined_at ? object.joined_at.strftime("%m/%d/%Y") : ""
  end
end