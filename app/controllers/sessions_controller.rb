class SessionsController < ApplicationController
  def login
      @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to "/users"
      else
        redirect_to "/users/new"
      end
    end

  def logout
    session[:user_id] = nil
    redirect_to "/"
  end
end
