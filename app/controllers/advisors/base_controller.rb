class Advisors::BaseController < ActionController::Base
  layout "advisor"
  protect_from_forgery with: :exception

  before_action :require_login, :authorize
  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def signed_in?
    current_user != nil
  end

  def require_login
    unless signed_in?
      flash[:notice] = "You must sign in to see this page"
      redirect_to sessions_new_path
    end
  end

  def authorize
    unless current_user.subjectable_type == "LoanMember"
      session[:user_id] = nil
      flash[:notice] = "You have no right to access this page"
      redirect_to sessions_new_path
    end
  end
end
