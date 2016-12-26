module Quotes
  class DetailSerializer < BaseSerializer
    attributes :id, :name, :amount, :interest_rate, :ltv, :year_term, :year_amortization, :monthly_payment

    def name
      object.name.titleize.upcase
    end

    def ltv
      ActiveSupport::NumberHelper.number_to_percentage(object.ltv.to_f, precision: 0)
    end

    def interest_rate
      ActiveSupport::NumberHelper.number_to_percentage(object.interest_rate.to_f, precision: 2)
    end

    def amount
      ActiveSupport::NumberHelper.number_to_currency(object.loan_amount.to_f, precision: 0)
    end

    def monthly_payment
      ActiveSupport::NumberHelper.number_to_currency(object.payment.to_f, precision: 0)
    end
  end
end
