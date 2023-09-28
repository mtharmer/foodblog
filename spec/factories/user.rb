# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { 'user@example.com' }
    password { 'somepass' }

    factory :recipe_user do
      email { 'recipe@example.com' }
    end

    factory :comment_user do
      email { 'comment@example.com' }
    end
  end
end
