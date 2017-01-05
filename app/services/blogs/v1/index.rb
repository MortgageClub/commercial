module Blogs
  module V1
    class Index < Service
      def process
        if params[:type] == "simple"
          Blog.order(published_date: :desc, created_at: :desc).limit(params[:size].to_i).map { |blog| Blogs::SimpleSerializer.new(blog) }
        else
          Blog.includes(:user, :comments).order(published_date: :desc, created_at: :desc).limit(params[:size].to_i).map { |blog| Blogs::DetailSerializer.new(blog) }
        end
      end
    end
  end
end
