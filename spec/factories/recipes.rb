# frozen_string_literal: true

FactoryBot.define do
  factory :recipe do
    title { 'Some Recipe' }
    ingredients { 'Some Ingredients' }
    instructions { 'Some Instructions' }
    association :user, factory: :recipe_user
  end
end
