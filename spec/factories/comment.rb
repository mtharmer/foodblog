# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    content { 'Some cool comment' }
    association :user, factory: :comment_user
    recipe
  end
end
