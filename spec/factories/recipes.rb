# frozen_string_literal: true

FactoryBot.define do
  factory :recipe do
    title { 'Some Recipe' }
    ingredients { 'Some Ingredients' }
    instructions { 'Some Instructions' }
    user
  end
end
