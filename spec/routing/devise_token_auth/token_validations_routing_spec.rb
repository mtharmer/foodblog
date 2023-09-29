# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'UserRoutes', type: :routing do
  describe 'routing' do
    describe 'token_vaildations' do
      it 'routes to token_validations#validate_token' do
        expect(get: '/auth/validate_token').to route_to('devise_token_auth/token_validations#validate_token')
      end
    end
  end
end
