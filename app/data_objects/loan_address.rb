class LoanAddress
  include Virtus.model

  attribute :street_address, String
  attribute :city, String
  attribute :state, String
  attribute :zip, String
  attribute :full_text, String
end