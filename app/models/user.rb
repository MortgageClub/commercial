class User < ApplicationRecord
  devise :database_authenticatable,
         :recoverable, :rememberable,
         :trackable

  include DeviseTokenAuth::Concerns::User

  has_one :business
  has_many :invited_referrals
  belongs_to :subjectable, polymorphic: true

  validates_uniqueness_of :email, case_sensitive: false, allow_blank: true, if: :email_changed?
  validates_format_of :email, with: Devise.email_regexp, allow_blank: true, if: :email_changed?
  validates_presence_of :password, on: :create
  validates_confirmation_of :password, on: :create
  validates_length_of :password, within: Devise.password_length, allow_blank: true
  validates :referral_code, uniqueness: true, allow_blank: true

  has_attached_file :avatar,
    styles: { thumb: "100", medium: "350" },
    default_url: "/default_avatar.png",
    s3_permissions: 'authenticated-read',
    s3_server_side_encryption: 'AES256'

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def confirmation_required?
    false
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
