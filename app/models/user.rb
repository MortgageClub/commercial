class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  has_one :business
  belongs_to :subjectable, polymorphic: true

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable

  has_attached_file :avatar, styles: { thumb: "100", medium: "350" }, default_url: "/default_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def confirmation_required?
    false
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
