module Blogs
  class DetailSerializer < BaseSerializer
    default_include "user"
    attributes :title, :short_description, :image_url, :content, :category, :id, :created_at, :slug, :image_full_url, :author_name, :author_bio, :author_avatar
    
    def image_url
      object.image.present? ? object.image.expiring_url(60, :medium) : ""
    end

    def image_full_url
      object.image.present? ? object.image.expiring_url(60) : ""
    end

    def category
      object.try(:category).try(:titleize)
    end

    def created_at
      object.published_date ? object.published_date.strftime("%b %d, %Y") : object.created_at.strftime("%b %d, %Y")
    end

    def author_name
      object.user ? object.user.full_name : "Billy Tran"
    end

    def author_bio
      object.user ? object.user.author_bio : "There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    end

    def author_avatar
      object.user ? object.user.avatar.expiring_url(10, :thumb) : "https://ca.slack-edge.com/T041L28A7-U041L2M1H-f402f0e0f79b-1024"
    end
  end
end
