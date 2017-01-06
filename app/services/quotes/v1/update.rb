module Quotes
  module V1
    class Update < Service
      require_authen!

      def process
        quote = Quote.find(params[:id])
        ActiveRecord::Base.transaction do
          quote.loan.quotes.update_all(status: :open)
          quote.selected!
          quote.loan.update(
            ltv: quote.ltv,
            term: quote.year_term,
            amortization: quote.year_amortization,
            amount: quote.loan_amount
          )
        end

        Loans::DetailSerializer.new(quote.loan)
      end
    end
  end
end
