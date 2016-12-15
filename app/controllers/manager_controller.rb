class ManagerController < AdminController
  def index

  end

  def login
    user = User.find_by_email(params[:email])
    if user && user.valid_password?(params[:password])
      sign_in(:user, user)

      if (user.subjectable_type == "Admin")
        return redirect_to "http://zing.vn"
      end
    end
  end

  def logout
  end
end
