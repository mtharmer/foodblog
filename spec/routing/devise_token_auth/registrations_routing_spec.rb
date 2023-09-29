# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DeviseTokenAuth::RegistrationsController, type: :routing do
  describe 'routing' do
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
  end
end
