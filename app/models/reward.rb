class Reward < ApplicationRecord
  belongs_to :user

  validates :award, :points, presence: true
end
