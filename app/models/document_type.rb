class DocumentType < ApplicationRecord
  enum category: {
    borrower: "borrower",
    loan: "loan",
    property: "property",
    closing: "closing",
    guarantor: "guarantor"
  }

  validates :name, presence: true
  validates :category, presence: true
end
