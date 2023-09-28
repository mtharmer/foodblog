# frozen_string_literal: true

require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe '/recipes', type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Recipe. As you add validations to Recipe, be sure to
  # adjust the attributes here as well.
  let(:user) { create(:user) }
  let(:otheruser) { create(:user, email: 'another@example.com') }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # RecipesController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) do
    {}
  end

  describe 'GET /index' do
    before do
      create(:recipe, title: 'Some Recipe', user: user)
      create(:recipe, title: 'Another Recipe', user: user)
    end

    it 'renders a successful response' do
      get api_v1_recipes_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end

    it 'returns a list of recipes' do
      get api_v1_recipes_url, headers: valid_headers, as: :json
      body = JSON.parse(response.body)
      expect(body.length).to eq(2)
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      recipe = create(:recipe, title: 'Some Recipe', user: user)
      # recipe = Recipe.create! valid_attributes
      get api_v1_recipe_url(recipe), as: :json
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      let(:recipe) { build(:recipe, user: user) }

      it 'creates a new Recipe' do
        expect do
          post api_v1_recipes_url,
               params: { recipe: recipe }, headers: valid_headers, as: :json
        end.to change(Recipe, :count).by(1)
      end

      it 'renders a JSON response with the new recipe' do
        post api_v1_recipes_url,
             params: { recipe: recipe }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including('application/json'))
      end
    end

    context 'with invalid parameters' do
      let(:recipe) { build(:recipe, user: nil) }

      it 'does not create a new Recipe' do
        expect do
          post api_v1_recipes_url,
               params: { recipe: recipe }, as: :json
        end.to change(Recipe, :count).by(0)
      end

      it 'renders a JSON response with errors for the new recipe' do
        post api_v1_recipes_url,
             params: { recipe: recipe }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including('application/json'))
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:recipe) { create(:recipe, user: user) }
      let(:new_recipe) { recipe }

      before do
        new_recipe.instructions = 'Other Instructions'
      end

      it 'updates the requested recipe' do
        patch api_v1_recipe_url(recipe),
              params: { recipe: new_recipe }, headers: valid_headers, as: :json
        updated_recipe = Recipe.find_by(id: recipe.id)
        expect(updated_recipe.instructions).to eq('Other Instructions')
      end

      it 'renders a JSON response with the recipe' do
        patch api_v1_recipe_url(recipe),
              params: { recipe: new_recipe }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to match(a_string_including('application/json'))
        expect(response.body).to match(a_string_including('Other Instructions'))
      end
    end

    context 'with invalid parameters' do
      let(:recipe) { create(:recipe, user: user) }
      let(:new_recipe) { recipe }

      it 'renders a JSON response with errors for the recipe' do
        new_recipe.user = nil
        patch api_v1_recipe_url(recipe),
              params: { recipe: new_recipe }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including('application/json'))
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested recipe' do
      recipe = create(:recipe, user: user)
      expect do
        delete api_v1_recipe_url(recipe), headers: valid_headers, as: :json
      end.to change(Recipe, :count).by(-1)
    end
  end
end