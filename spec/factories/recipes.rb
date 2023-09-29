# frozen_string_literal: true

FactoryBot.define do
  factory :recipe do
    title { Faker::Food.unique.dish }
    ingredients { Faker::Food.ingredient }
    instructions { Faker::Food.description }
    user
  end
end
