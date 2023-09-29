# frozen_string_literal: true

module Auth
  class SessionsController < DeviseTokenAuth::SessionsController
    def create
      super do
        render json: { user: current_user,
                       token: @token }.to_json and return
      end
    end
  end
end
