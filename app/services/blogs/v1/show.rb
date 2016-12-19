module Blogs
  module V1
    class Show < Service
      def process
        Blogs::DetailSerializer.new(Blog.friendly.find(params[:id]))
      end
    end
  end
end
