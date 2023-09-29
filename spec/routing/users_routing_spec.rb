# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'UserRoutes', type: :routing do
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

    describe 'registrations' do
      it 'routes to registrations#cancel' do
        expect(get: '/auth/cancel').to route_to('devise_token_auth/registrations#cancel')
      end

      it 'routes to registrations#new' do
        expect(get: '/auth/sign_up').to route_to('devise_token_auth/registrations#new')
      end

      it 'routes to registrations#edit' do
        expect(get: '/auth/edit').to route_to('devise_token_auth/registrations#edit')
      end

      it 'routes to registrations#update' do
        expect(patch: '/auth').to route_to('devise_token_auth/registrations#update')
        expect(put: '/auth').to route_to('devise_token_auth/registrations#update')
      end

      it 'routes to registrations#destroy' do
        expect(delete: '/auth').to route_to('devise_token_auth/registrations#destroy')
      end

      it 'routes to registrations#create' do
        expect(post: '/auth').to route_to('devise_token_auth/registrations#create')
      end
    end

    describe 'token_vaildations' do
      it 'routes to token_validations#validate_token' do
        expect(get: '/auth/validate_token').to route_to('devise_token_auth/token_validations#validate_token')
      end
    end
  end
end
