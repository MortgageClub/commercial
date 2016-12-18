class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  has_one :business
  has_many :invited_referrals
  belongs_to :subjectable, polymorphic: true

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable

  validates :referral_code, uniqueness: true

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/default_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def confirmation_required?
    false
  end

  def name
    "#{self.first_name} #{self.last_name}"
  end
end
