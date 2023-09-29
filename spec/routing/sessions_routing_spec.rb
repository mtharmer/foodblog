# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Auth::SessionsController, type: :routing do
  describe 'routing' do
    describe 'sessions' do
      it 'routes to sessions#new' do
        expect(get: '/auth/sign_in').to route_to('auth/sessions#new')
      end

      it 'routes to sessions#create' do
        expect(post: '/auth/sign_in').to route_to('auth/sessions#create')
      end

      it 'routes to sessions#destroy' do
        expect(delete: '/auth/sign_out').to route_to('auth/sessions#destroy')
      end
    end
  end
end
