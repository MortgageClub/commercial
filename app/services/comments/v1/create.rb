module Comments
  module V1
    class Create < Service
      def process
        blog = Blog.friendly.find(params[:blog_id])
        comment = Comment.new(comment_params)
        comment.blog = blog
        comment.save
        
        Blogs::DetailSerializer.new(blog)
      end

      def comment_params
        params.require(:comment).permit(
          :name,
          :email,
          :content
        )
      end
    end
  end
end
