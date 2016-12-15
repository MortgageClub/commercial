class Admins::DocumentTypesController < Admins::BaseController
  before_action :set_document_type, only: [:edit, :update, :destroy]

  def index
    @q = DocumentType.ransack(params[:q])
    @document_types = @q.result.page params[:page]
  end

  def new
    @document_type = DocumentType.new
  end

  def create
    @document_type = DocumentType.new(document_type_params)

    if @document_type.save
      flash[:success] = "Create document type successfully!"
      return redirect_to admins_document_types_path
    end

    render :new
  end

  def update
    if @document_type.update(document_type_params)
      flash[:success] = "Update document type successfully!"
      return redirect_to admins_document_types_path
    end

    render :edit
  end

  def destroy
    @document_type.destroy

    flash[:success] = "Delete document type successfully!"
    redirect_to admins_document_types_path
  end

  private

  def set_document_type
    @document_type = DocumentType.find(params[:id])
  end

  def document_type_params
    params.require(:document_type).permit(
      :name,
      :category
    )
  end
end
