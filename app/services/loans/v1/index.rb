module Loans
  module V1
    class Index < Service
      require_authen!

      def process
        Loan.where(borrower: @user.subjectable).map { |loan| Loans::DetailSerializer.new(loan) }
      end
    end
  end
end
