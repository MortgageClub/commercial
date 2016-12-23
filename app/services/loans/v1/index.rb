module Loans
  module V1
    class Index < Service
      require_authen!

      def process
        Loan.includes(property: :address).where(borrower: @user.subjectable).map { |loan| Loans::SimpleSerializer.new(loan) }
      end
    end
  end
end
