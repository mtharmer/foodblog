# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'allows a user to be created' do
    user = create(:user)
    expect(user).not_to eq(nil)
    expect(described_class.first.email).to eq(user.email)
  end

  describe 'validation' do
    it 'requires an email' do
      expect { create(:user, email: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, "Validation failed: Email can't be blank"
      )
    end

    it 'requires unique emails' do
      user = create(:user)
      expect { create(:user, email: user.email) }.to raise_error(
        ActiveRecord::RecordInvalid, 'Validation failed: Email has already been taken'
      )
    end

    it 'requires a password' do
      expect { create(:user, password: nil) }.to raise_error(
        ActiveRecord::RecordInvalid, "Validation failed: Password can't be blank"
      )
    end
  end
end
