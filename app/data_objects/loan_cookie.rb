class LoanCookie
  include Virtus.model

  attribute :amount, Fixnum
  attribute :purpose, String
  attribute :detail, String
  attribute :address, LoanAddress
end