# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DeviseTokenAuth::PasswordsController, type: :routing do
  describe 'routing' do
    describe 'passwords' do
      it 'routes to passwords#new' do
        expect(get: '/auth/password/new').to route_to('devise_token_auth/passwords#new')
      end

      it 'routes to passwords#edit' do
        expect(get: '/auth/password/edit').to route_to('devise_token_auth/passwords#edit')
      end

      it 'routes to passwords#update' do
        expect(put: '/auth/password').to route_to('devise_token_auth/passwords#update')
        expect(patch: '/auth/password').to route_to('devise_token_auth/passwords#update')
      end

      it 'routes to passwords#create' do
        expect(post: '/auth/password').to route_to('devise_token_auth/passwords#create')
      end
    end
  end
end
