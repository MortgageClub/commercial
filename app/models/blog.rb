class Blog < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  has_attached_file :image,
    styles: { thumb: "100", medium: "350" },
    s3_permissions: 'authenticated-read',
    s3_server_side_encryption: 'AES256'

  validates_attachment :image,
    presence: true,
    content_type: {
      content_type: IMAGE_MINE_TYPES
    },
    size: {
      less_than_or_equal_to: 10.megabytes,
      message: "must be less than or equal to 10MB"
    }

  enum category: {
    commercial_real_estate: "commercial_real_estate",
    financing: "financing",
    data: "data",
    technology: "technology",
    events: "events"
  }

  belongs_to :user

  validates :user, presence: true
  validates :title, presence: true, uniqueness: true
  validates :category, presence: true
  validates :short_description, presence: true
  validates :content, presence: true
end
