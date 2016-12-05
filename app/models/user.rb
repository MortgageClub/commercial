class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  has_one :business_information
  belongs_to :subjectable, polymorphic: true

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable, :confirmable

  def confirmation_required?
    false
  end
end
