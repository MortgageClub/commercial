module Loans
  module V1
    class Create < Service
      require_authen!

      def process
        # address_params = params[:loan][:address]
        # relationship_manager_title = RelationshipManagerTitle.find_by_title("Relationship Manager")
        # loan_member = User.find_by_email("").try(:subjectable)

        @user.subjectable.loans.create!(
          property: Property.new(
            full_address: params[:loan][:address]
          ),
          closing: Closing.new,
          guarantor: Guarantor.new,
          amount: params[:loan][:loan_amount].gsub(/[$,]/,'').to_f,
          purpose: params[:loan][:purpose],
          note: params[:loan][:detail],
          status: :new_loan
        )
      end
    end
  end
end
