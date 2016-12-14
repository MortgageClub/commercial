module Checklists
  module V1
    class MarkDone < Service
      require_authen!

      def process
        checklist = Checklist.find(params[:checklist][:id])
        checklist.done!

        Loans::DetailSerializer.new(checklist.loan)
      end
    end
  end
end
