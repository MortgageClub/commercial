class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  has_one :business
  belongs_to :subjectable, polymorphic: true

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable

  validates :referral_code, uniqueness: true

  def confirmation_required?
    false
  end
end
