module Loans
  class DetailSerializer < BaseSerializer
    default_include "property, checklists, documents, property.documents, borrower, borrower.documents, closing, closing.documents, guarantor, guarantor.documents, quotes"

    attributes :id,
      :amount,
      :status,
      :purpose,
      :loan_members,
      :property_address,
      :ltv,
      :interest_rate_spread,
      :interest_rate_index,
      :fixed_rate_period,
      :term,
      :amortization,
      :prepayment_premium,
      :origination_fees,
      :processing_fees,
      :underwritting_fees,
      :appraisal_fees,
      :phase_1_fees,
      :site_visit_expense,
      :legal_expense,
      :survey_fees,
      :net_operating_income,
      :dcsr

    has_one :property, serializer: Properties::DetailSerializer
    has_many :checklists, serializer: Checklists::DetailSerializer
    has_many :documents, serializer: Documents::DetailSerializer
    belongs_to :borrower, serializer: Borrowers::DetailSerializer
    has_one :closing, serializer: Closings::DetailSerializer
    has_one :guarantor, serializer: Guarantors::DetailSerializer
    has_many :quotes, serializer: Quotes::DetailSerializer

    def status
      object.status.titleize
    end

    def ltv
      object.site_visit_expense ? ActiveSupport::NumberHelper.number_to_percentage(object.ltv.to_f, precision: 0) : nil
    end

    def origination_fees
      object.origination_fees ? ActiveSupport::NumberHelper.number_to_currency(object.origination_fees.to_f, precision: 0) : nil
    end

    def processing_fees
      object.processing_fees ? ActiveSupport::NumberHelper.number_to_currency(object.processing_fees.to_f, precision: 0) : nil
    end

    def underwritting_fees
      object.underwritting_fees ? ActiveSupport::NumberHelper.number_to_currency(object.underwritting_fees.to_f, precision: 0) : nil
    end

    def appraisal_fees
      object.appraisal_fees ? ActiveSupport::NumberHelper.number_to_currency(object.appraisal_fees.to_f, precision: 0) : nil
    end

    def phase_1_fees
      object.phase_1_fees ? ActiveSupport::NumberHelper.number_to_currency(object.phase_1_fees.to_f, precision: 0) : nil
    end

    def site_visit_expense
      object.site_visit_expense ? ActiveSupport::NumberHelper.number_to_currency(object.site_visit_expense.to_f, precision: 0) : nil
    end

    def legal_expense
      object.legal_expense ? ActiveSupport::NumberHelper.number_to_currency(object.legal_expense.to_f, precision: 0) : nil
    end

    def survey_fees
      object.survey_fees ? ActiveSupport::NumberHelper.number_to_currency(object.survey_fees.to_f, precision: 0) : nil
    end

    def net_operating_income
      object.net_operating_income ? ActiveSupport::NumberHelper.number_to_currency(object.net_operating_income.to_f, precision: 0) : nil
    end

    def amount
      ActiveSupport::NumberHelper.number_to_currency(object.amount.to_f, precision: 0)
    end

    def purpose
      object.purpose.titleize
    end

    def property_address
      object.property ? object.property.full_address : "Unknown Address"
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
