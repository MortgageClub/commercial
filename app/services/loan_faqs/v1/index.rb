module LoanFaqs
  module V1
    class Index < Service
      require_authen!

      def process
        LoanFaq.all
      end
    end
  end
end
