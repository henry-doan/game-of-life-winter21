class Reward < ApplicationRecord
  belongs_to :user

  validates :award, :points, :image, :achieved, presence: true
end
