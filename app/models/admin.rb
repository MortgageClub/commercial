class Admin < ApplicationRecord
  before_action :authenticate_user!

  has_one :user, as: :subjectable, dependent: :destroy

end
