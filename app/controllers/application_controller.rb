#encoding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user
  
  
    def authenticate
      deny_access unless current_user
    end
    
    def deny_access
    redirect_to root_path, :notice => "Fuck off"
    end
  
  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
