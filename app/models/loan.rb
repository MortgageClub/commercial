class Loan < ApplicationRecord
  belongs_to :borrower
  has_one :property
  has_one :agent
  has_one :guarantor
  has_one :closing
  has_many :checklists
  has_many :documents, as: :documentable

  enum purpose: {
    purchase: "purchase",
    refinance: "refinance",
    cash_out_refinance: "cash_out_refinance"
  }

  enum status: {
    new_loan: "new_loan",
    submitted: "submitted",
    processing: "processing",
    approved_with_conditions: "approved_with_conditions",
    approved: "approved",
    closed: "closed",
    underwriting: "underwriting",
    suspended: "suspended"
  }

  def property_address
    property && property.address ? property.address.full_text : "Unknown Address"
  end

  def number_of_done_checklists
    checklists.where(status: :done).size
  end
end
