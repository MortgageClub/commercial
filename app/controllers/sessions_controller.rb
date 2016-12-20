class SessionsController < ApplicationController
  layout false
  protect_from_forgery with: :exception

  def new
    if session[:user_id]
      user = User.find_by_id(session[:user_id])
      if user
        if user.subjectable_type == "Admin"
          return redirect_to admins_document_types_path
        elsif user.subjectable_type == "LoanMember"
          return redirect_to advisors_loans_path
        end
      end

      session[:user_id] = nil
    end
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.valid_password?(params[:password])
      if user.subjectable_type == "Admin"
        session[:user_id] = user.id
        return redirect_to admins_document_types_path
      elsif user.subjectable_type == "LoanMember"
        session[:user_id] = user.id
        return redirect_to advisors_loans_path
      else
      end
    end

    flash.now[:error] = "Your credentials are wrong. Please try again!"
    render :new
  end

  def destroy
    session[:user_id] = nil
    flash.now[:notice] = "Logout successfully"

    redirect_to sessions_new_path
  end
end
