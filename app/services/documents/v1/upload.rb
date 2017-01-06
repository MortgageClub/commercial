module Documents
  module V1
    class Upload < Service
      require_authen!

      def process
        checklist = Checklist.find(params[:checklist_id])
        document_type = DocumentType.find(checklist.document_type_id)
        loan = checklist.loan

        document = checklist.document ? checklist.document : Document.new
        document.attachment = params[:file]
        document.document_type = document_type
        document.original_filename = params[:file].original_filename
        document.description = checklist.document_description

        case document_type.category
        when "borrower"
          document.documentable_id = loan.borrower.id
          document.documentable_type = "Borrower"
        when "loan"
          document.documentable_id = loan.id
          document.documentable_type = "Loan"
        when "property"
          document.documentable_id = loan.property.id
          document.documentable_type = "Property"
        when "closing"
          document.documentable_id = loan.closing.id
          document.documentable_type = "Closing"
        when "guarantor"
          document.documentable_id = loan.guarantor.id
          document.documentable_type = "Guarantor"
        else
        end

        checklist.document = document
        checklist.status = :done

        checklist.save!
        ChecklistNotifyMailer.notify_when_upload_document(checklist, loan).deliver_later
        Loans::DetailSerializer.new(checklist.loan)
      end
    end
  end
end
