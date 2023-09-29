# frozen_string_literal: true

require 'rails_helper'

RSpec.describe '/auth (sign-in/out/up)', type: :request do
  describe 'POST /auth/sign_in' do
    context 'with valid parameters' do
      let(:user) { create(:user) }
      let(:data) { JSON.parse(response.body) }

      before do
        post user_session_url,
             params: { email: user.email, password: user.password }, headers: {}, as: :json
      end

      it 'allows a user to be created' do
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to match(a_string_including('application/json'))
      end

      it 'returns the user token on success' do
        expect(data&.dig('token')).not_to be_nil
        expect(data&.dig('token')).not_to be_blank
      end

      it 'returns the user token with client field' do
        expect(data&.dig('token')&.dig('client')).not_to be_nil
        expect(data&.dig('token')&.dig('client')).not_to be_blank
      end

      it 'returns the user token with token field' do
        expect(data&.dig('token')&.dig('token')).not_to be_nil
        expect(data&.dig('token')&.dig('token')).not_to be_blank
      end

      it 'returns the user token with expiry field' do
        expect(data&.dig('token')&.dig('expiry')).not_to be_nil
        expect(data&.dig('token')&.dig('expiry')).to be > 0
      end

      it 'returns the user token with token_hash field' do
        expect(data&.dig('token')&.dig('token_hash')).not_to be_nil
        expect(data&.dig('token')&.dig('token_hash')).not_to be_blank
      end
    end

    context 'with invalid parameters' do
      let(:user) { create(:user) }

      it 'returns unauthorized if email is missing' do
        post user_session_url,
             params: { email: '', password: user.password }, headers: {}, as: :json
        expect(response).to have_http_status(:unauthorized)
      end

      it 'returns unauthorized if password is missing' do
        post user_session_url,
             params: { email: user.email, password: '' }, headers: {}, as: :json
        expect(response).to have_http_status(:unauthorized)
      end

      it 'returns unauthorized if the password is incorrect' do
        post user_session_url,
             params: { email: user.email, password: "#{user.password}1" }, headers: {}, as: :json
        expect(response).to have_http_status(:unauthorized)
      end

      it 'returns unauthorized with error messages' do
        post user_session_url,
             params: { email: user.email, password: "#{user.password}1" }, headers: {}, as: :json
        body = JSON.parse(response.body)
        expect(response).to have_http_status(:unauthorized)
        expect(body&.dig('errors')).to include('Invalid login credentials. Please try again.')
      end
    end
  end
end
