class Advisors::ChecklistsController < Advisors::BaseController
  before_action :set_loan
  before_action :set_checklist, only: [:edit, :update, :destroy]
  before_action :set_document_types, only: [:new, :create, :edit, :destroy]

  def index
    @q = Checklist.ransack(params[:q])
    @checklists = @q.result.where(loan: @loan).page(params[:page])
  end

  def new
    @checklist = @loan.checklists.build
  end

  def create
    @checklist = @loan.checklists.build(checklist_params)

    if @checklist.save
      flash[:success] = "Create checklist successfully!"
      return redirect_to advisors_loan_checklists_path
    end

    render :new
  end

  def update
    if @checklist.update(checklist_params)
      flash[:success] = "Update checklist successfully!"
      return redirect_to advisors_loan_checklists_path
    end

    render :edit
  end

  def destroy
    @checklist.destroy

    flash[:success] = "Delete checklist successfully!"
    redirect_to advisors_loan_checklists_path
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end

  def set_checklist
    @checklist = Checklist.find(params[:id])
  end

  def set_document_types
    @document_types = DocumentType.all.inject({}) do |options, document_type|
      (options[document_type.category.titleize] ||= []) << [document_type.name, document_type.id]
      options
    end
  end

  def checklist_params
    params.require(:checklist).permit(
      :name,
      :status,
      :checklist_type,
      :due_date,
      :information,
      :document_type_id,
      :document_description
    )
  end
end
