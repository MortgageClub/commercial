class AdminController < ActionController::Base
  layout "admin"
  protect_from_forgery with: :exception
end
