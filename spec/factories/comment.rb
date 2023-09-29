# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    content { Faker::Quote.matz }
    user
    recipe
  end
end
