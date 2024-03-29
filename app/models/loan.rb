class Loan < ApplicationRecord
  belongs_to :borrower
  has_one :property, dependent: :destroy
  has_one :agent, dependent: :destroy
  has_one :guarantor, dependent: :destroy
  has_one :closing, dependent: :destroy
  has_many :checklists, dependent: :destroy
  has_many :documents, as: :documentable, dependent: :destroy
  has_many :assigned_loan_members, dependent: :destroy
  has_many :quotes, dependent: :destroy

  accepts_nested_attributes_for :property

  enum purpose: {
    purchase: "purchase",
    refinance: "refinance",
    cash_out_refinance: "cash_out_refinance"
  }

  enum status: {
    due_diligence: "due_diligence",
    getting_quotes: "getting_quotes",
    processing: "processing",
    underwriting: "underwriting",
    closing: "closing",
    funding: "funding",
    closed: "closed"
  }

  def property_address
    property ? property.full_address : "Unknown Address"
  end

  def number_of_done_checklists
    checklists.where(status: :done).size
  end

  def number_of_pending_checklists
    checklists.where(status: :pending).size
  end
end
