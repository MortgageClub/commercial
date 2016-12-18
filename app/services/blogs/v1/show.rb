module Blogs
  module V1
    class Show < Service
      def process
        Blogs::DetailSerializer.new(Blog.find(params[:id]))
      end
    end
  end
end
