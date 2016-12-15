class AdminController < ActionController::Base
  include Devise::Controllers::Helpers

  layout "admin"
  protect_from_forgery with: :exception
end
