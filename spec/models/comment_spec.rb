# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Comment, type: :model do
  it 'allows a comment to be created' do
    create(:comment)
    expect(described_class.count).to eq(1)
  end

  describe 'validation' do
    it 'requires a user' do
      expect { create(:comment, user: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: User must exist'
      )
    end

    it 'requires a recipe' do
      expect { create(:comment, recipe: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: Recipe must exist'
      )
    end

    it 'requires content to exist' do
      expect { create(:comment, content: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, "Validation failed: Content can't be blank"
      )
    end
  end
end
