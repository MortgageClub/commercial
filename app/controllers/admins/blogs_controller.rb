class Admins::BlogsController < Admins::BaseController
  before_action :set_blog, only: [:edit, :update, :destroy]
  before_action :set_authors, only: [:new, :create, :edit, :update]
  
  def index
    @q = Blog.ransack(params[:q])
    @blogs = @q.result.page(params[:page])
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)

    if @blog.save
      flash[:success] = "Create blog successfully!"
      return redirect_to admins_blogs_path
    end

    render :new
  end

  def update
    if @blog.update(blog_params)
      flash[:success] = "Update blog successfully!"
      return redirect_to admins_blogs_path
    end

    render :edit
  end

  def destroy
    @blog.destroy

    flash[:success] = "Delete blog successfully!"
    redirect_to admins_blogs_path
  end

  private

  def set_blog
    @blog = Blog.friendly.find(params[:id])
  end

  def set_authors
    @authors = User.where(subjectable_type: "LoanMember")
  end

  def blog_params
    params.require(:blog).permit(
      :title,
      :category,
      :content,
      :short_description,
      :image,
      :published_date,
      :user_id
    )
  end
end
