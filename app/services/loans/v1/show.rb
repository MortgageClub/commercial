module Loans
  module V1
    class Show < Service
      require_authen!

      def process
        Loans::DetailSerializer.new(loan)
      end

      private
      def loan
        @loan ||= Loan.includes(:quotes, checklists: :document)
          .find(params[:id])
      end
    end
  end
end
