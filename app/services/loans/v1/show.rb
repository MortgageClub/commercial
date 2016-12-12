module Loans
  module V1
    class Show < Service
      require_authen!

      def process
        Loans::DetailSerializer.new(Loan.find(params[:id]))
      end
    end
  end
end
