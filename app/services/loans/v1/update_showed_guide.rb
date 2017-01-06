module Loans
  module V1
    class UpdateShowedGuide < Service
      require_authen!

      def process
        loan = Loan.find_by_id(params[:id])
        
        if loan
          loan.update(is_showed_guide: true)

          Loans::DetailSerializer.new(loan)
        end
      end
    end
  end
end
