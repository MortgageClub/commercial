class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  has_one :business
  belongs_to :subjectable, polymorphic: true

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable

  def confirmation_required?
    false
  end
end
