module Loans
  module V1
    class Index < Service
      require_authen!

      def process
        @user.subjectable.loans
      end
    end
  end
end
