module Blogs
  class DetailSerializer < BaseSerializer
    attributes :title, :short_description, :image_url, :content, :category, :id, :created_at, :slug

    def image_url
      object.image.present? ? object.image.expiring_url(60) : ""
    end

    def category
      object.category.titleize
    end
  end
end
