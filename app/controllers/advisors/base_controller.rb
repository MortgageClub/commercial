class Advisors::BaseController < ActionController::Base
  layout "advisor"
  protect_from_forgery with: :exception
end
