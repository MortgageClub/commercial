class Advisors::LoansController < Advisors::BaseController
  def index
    @q = Loan.ransack(params[:q])
    relationship_manager = LoanMemberTitle.find_by_title("Relationship Manager")
    loan_anlyst = LoanMemberTitle.find_by_title("Loan Analyst")

    @loans = @q.result.joins(:assigned_loan_members).where('assigned_loan_members.loan_member_id = ? and (assigned_loan_members.loan_member_title_id = ? or assigned_loan_members.loan_member_title_id = ?)', current_user.subjectable_id, relationship_manager.try(:id), loan_anlyst.try(:id)).page(params[:page])
  end

  def edit
    @loan = Loan.find(params[:id])
  end

  def update
    @loan = Loan.find(params[:id])

    if @loan.update(loan_params)
      flash[:success] = "Update loan successfully!"
      return redirect_to edit_advisors_loan_path(@loan)
    end

    render :edit
  end

  def loan_params
    params.require(:loan).permit(
      :amount,
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
      :dcsr,
      property_attributes: [
        :full_address,
        :property_type,
        :estimated_value,
        :appraised_value,
        :id
      ]
    )
  end
end
