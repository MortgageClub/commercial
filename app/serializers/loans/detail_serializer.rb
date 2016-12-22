module Loans
  class DetailSerializer < BaseSerializer
    default_include "property, property.address, checklists, documents, property.documents, borrower, borrower.documents, closing, closing.documents, guarantor, guarantor.documents"

    attributes :id, :amount, :status, :purpose, :loan_members
    has_one :property, serializer: Properties::DetailSerializer
    has_many :checklists, serializer: Checklists::DetailSerializer
    has_many :documents, serializer: Documents::DetailSerializer
    belongs_to :borrower, serializer: Borrowers::DetailSerializer
    has_one :closing, serializer: Closings::DetailSerializer
    has_one :guarantor, serializer: Guarantors::DetailSerializer

    def status
      object.status.titleize
    end

    def amount
      ActiveSupport::NumberHelper.number_to_currency(object.amount.to_f, precision: 0)
    end

    def purpose
      object.purpose.titleize
    end

    def loan_members
      loan_members_array = []

      object.assigned_loan_members.includes(:loan_member_title, loan_member: :user).each do |assigned_loan_member|
        loan_members_array << {
          full_name: assigned_loan_member.loan_member.full_name,
          title: assigned_loan_member.loan_member_title.title,
          id: assigned_loan_member.id,
          individual_bre: assigned_loan_member.loan_member.individual_bre,
          phone_number: ActiveSupport::NumberHelper.number_to_phone(assigned_loan_member.loan_member.phone_number),
          email: assigned_loan_member.loan_member.user.email,
          avatar_url: assigned_loan_member.loan_member.user.avatar.expiring_url(60, :thumb)
        }
      end

      loan_members_array
    end
  end
end
