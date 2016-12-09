module Loans
  module V1
    class Create < Service
      require_authen!

      def process
        @user.subjectable.loans.create(property: Property.create(property_type: params[:loan][:property_type]), amount: params[:loan][:loan_amount].to_f, purpose: params[:loan][:purpose])
      end
    end
  end
end
