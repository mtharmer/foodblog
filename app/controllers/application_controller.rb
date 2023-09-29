# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::RequestForgeryProtection
  protect_from_forgery prepend: true
  # before_action :authenticate_user!, except: [:devise_controller?, :sessions_controller?]
end
