module LoanFaqs
  module V1
    class Index < Service
      require_authen!

      def process
        LoanFaq.order(:order_number)
      end
    end
  end
end
