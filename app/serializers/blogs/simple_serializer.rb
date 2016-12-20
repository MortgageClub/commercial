module Blogs
  class SimpleSerializer < BaseSerializer
    attributes :title, :short_description, :image_url, :id, :slug

    def image_url
      object.image.present? ? object.image.expiring_url(60, :thumb) : ""
    end
  end
end
