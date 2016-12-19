class Blog < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  has_attached_file :image,
    styles: { thumb: "60", medium: "350x350" },
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
    apartment: "apartment",
    apartment_building: "apartment_building",
    bungalow: "bungalow",
    corporate_house: "corporate_house",
    duplex_villa: "duplex_villa"
  }

  validates :title, presence: true, uniqueness: true
  validates :category, presence: true
  validates :short_description, presence: true
  validates :content, presence: true
end
