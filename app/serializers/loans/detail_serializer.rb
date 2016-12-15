module Loans
  class DetailSerializer < BaseSerializer
    default_include "property, property.address, checklists, documents, property.documents, borrower, borrower.documents, closing, closing.documents, guarantor, guarantor.documents"

    attributes :id, :amount, :status, :purpose
    has_one :property, serializer: Properties::DetailSerializer
    has_many :checklists, serializer: Checklists::DetailSerializer
    has_many :documents, serializer: Documents::DetailSerializer
    belongs_to :borrower, serializer: Borrowers::DetailSerializer
    has_one :closing, serializer: Closings::DetailSerializer
    has_one :guarantor, serializer: Guarantors::DetailSerializer

    def status
      object.status.titleize
    end

    def purpose
      object.purpose.titleize
    end
  end
end
