# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Recipe, type: :model do
  it 'allows a recipe to be created' do
    user = create(:user)
    recipe = create(:recipe, title: 'Some Cool Recipe', user_id: user.id)
    expect(recipe).not_to eq(nil)
    expect(described_class.first.title).to eq('Some Cool Recipe')
  end

  it 'allows multiple recipes for a user' do
    user = create(:user)
    create(:recipe, title: 'Some Cool Recipe', user_id: user.id)
    create(:recipe, title: 'Another Cool Recipe', user_id: user.id)
    expect(described_class.where(user_id: user.id).count).to eq(2)
  end

  describe 'validation' do
    it 'does not create a recipe if no user is provided' do
      expect { create(:recipe, title: 'Some Cool Recipe', user: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: User must exist'
      )
    end

    it 'does not create a recipe if the user does not exist' do
      expect { create(:recipe, title: 'Some Cool Recipe', user_id: 0) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: User must exist'
      )
    end

    it 'requires unique titles per user' do
      user = create(:user)
      recipe = create(:recipe, title: 'Some Cool Recipe', user_id: user.id)
      expect { create(:recipe, title: recipe.title, user_id: user.id) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: Title has already been taken'
      )
    end

    it 'allows same titles for different users' do
      user1 = create(:user)
      user2 = create(:user, email: 'another@example.com', password: 'somepass')
      recipe = create(:recipe, title: 'Some Cool Recipe', user_id: user1.id)
      expect { create(:recipe, title: recipe.title, user_id: user2.id) }.not_to raise_error
    end
  end
end
