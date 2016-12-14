module Loans
  module V1
    class Create < Service
      require_authen!

      def process
        address_params = params[:loan][:address]

        @user.subjectable.loans.create!(
          property: Property.new(
            address: Address.new(
              street_address: address_params[:street_address],
              city: address_params[:city],
              state: address_params[:state],
              zip: address_params[:zip],
              full_text: address_params[:full_text]
            )
          ),
          guarantor: Guarantor.new,
          amount: params[:loan][:loan_amount].to_f,
          purpose: params[:loan][:purpose],
          note: params[:loan][:detail],
          status: :new_loan
        )
      end
    end
  end
end
