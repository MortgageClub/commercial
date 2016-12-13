class DocumentType < ApplicationRecord
  enum category: {
    borrower: "borrower",
    loan: "loan",
    property: "property",
    closing: "closing",
    guarantor: "guarantor"
  }
end
