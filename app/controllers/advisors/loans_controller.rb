class Advisors::LoansController < Advisors::BaseController
  before_action :set_loan, only: [:overview, :overview_update, :edit, :update]
  def index
    @q = Loan.ransack(params[:q])
    relationship_manager = LoanMemberTitle.find_by_title("Loan Advisor")
    loan_anlyst = LoanMemberTitle.find_by_title("Loan Analyst")

    @loans = @q.result.joins(:assigned_loan_members).where('assigned_loan_members.loan_member_id = ? and (assigned_loan_members.loan_member_title_id = ? or assigned_loan_members.loan_member_title_id = ?)', current_user.subjectable_id, relationship_manager.try(:id), loan_anlyst.try(:id)).page(params[:page])
  end

  def overview
  end

  def overview_update
    if @loan.update(overview_params)
      flash[:success] = "Update overview successfully!"
      return redirect_to advisors_loan_overview_path(@loan)
    end

    render :edit
  end

  def edit
  end

  def update
    if @loan.update(loan_params)
      flash[:success] = "Update loan successfully!"
      return redirect_to edit_advisors_loan_path(@loan)
    end

    render :edit
  end

  private

  def set_loan
    @loan = Loan.find(params[:id] || params[:loan_id])
  end

  def overview_params
    params.require(:loan).permit(
      :amount,
      :status,
      :blackline_note,
      :headline_1,
      :headline_2,
      property_attributes: [
        :image,
        :id
      ]
    )
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
