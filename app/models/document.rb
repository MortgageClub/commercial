class Document < ApplicationRecord
  belongs_to :document_type

  has_attached_file :attachment,
    s3_permissions: 'authenticated-read',
    s3_server_side_encryption: 'AES256'

  validates_attachment :attachment,
    content_type: {
      content_type: ALLOWED_MIME_TYPES,
      message: "allows MS Excel, MS Documents, MS Powerpoint, Rich Text, Text File and Images"
    },
    size: {
      less_than_or_equal_to: 10.megabytes,
      message: "must be less than or equal to 10MB"
    }

  belongs_to :documentable, polymorphic: true

  before_validation :set_private_token, on: :create

  def url
    # Amazon::GetUrlService.call(attachment)
  end

  private

  def set_private_token
    return if token.present?

    self.token = Digest::MD5.hexdigest(Time.zone.now.to_s)
  end
end
