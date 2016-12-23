module Blogs
  class DetailSerializer < BaseSerializer
    attributes :title, :short_description, :image_url, :content, :category, :id, :created_at, :slug, :image_full_url

    def image_url
      object.image.present? ? object.image.expiring_url(60, :medium) : ""
    end

    def image_full_url
      object.image.present? ? object.image.expiring_url(60) : ""
    end

    def category
      object.category.titleize
    end

    def created_at
      object.created_at.strftime("%m/%d/%Y %T")
    end
  end
end
