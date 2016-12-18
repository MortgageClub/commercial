class Advisors::DocumentsController < Advisors::BaseController
  before_action :set_loan
  before_action :set_document, only: [:edit, :update, :destroy]
  before_action :set_document_types, only: [:new, :create, :edit, :destroy]

  def index
    @q = Document.ransack(params[:q])
    @documents = @q.result.where(documentable: [@loan, @loan.property, @loan.closing, @loan.borrower, @loan.guarantor]).includes(:document_type).page(params[:page])
  end

  def new
    @document = Document.new
  end

  def create
    @document = Document.new(document_params)

    if @document.save
      flash[:success] = "Create document successfully!"
      return redirect_to advisors_loan_documents_path
    end

    render :new
  end

  def update
    if @document.update(document_params)
      flash[:success] = "Update document successfully!"
      return redirect_to advisors_loan_documents_path
    end

    render :edit
  end

  def destroy
    @document.destroy

    flash[:success] = "Delete document successfully!"
    redirect_to advisors_loan_documents_path
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end

  def set_document
    @document = Document.find(params[:id])
  end

  def set_document_types
    @document_types = DocumentType.all.inject({}) do |options, document_type|
      (options[document_type.category.titleize] ||= []) << [document_type.name, document_type.id]
      options
    end
  end

  def document_params
    doc_params = params.require(:document).permit(
      :description,
      :document_type_id,
      :attachment,
      :documentable_type
    )

    case doc_params[:documentable_type]
    when "Borrower"
      doc_params[:documentable_id] = @loan.borrower.id
    when "Loan"
      doc_params[:documentable_id] = @loan.id
    when "Closing"
      doc_params[:documentable_id] = @loan.closing.id
    when "Guarantor"
      doc_params[:documentable_id] = @loan.guarantor.id
    when "Property"
      doc_params[:documentable_id] = @loan.property.id
    else
    end
    doc_params[:original_filename] = doc_params[:attachment].original_filename

    doc_params
  end
end
