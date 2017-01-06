class Property < ApplicationRecord
  belongs_to :loan
  has_many :documents, as: :documentable

  has_attached_file :image,
    styles: { thumb: "100", medium: "350" },
    s3_permissions: 'authenticated-read',
    s3_server_side_encryption: 'AES256'

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
