class Reward < ApplicationRecord
  belongs_to :user

  validates :award, :points, :tags, :notes, presence: true

end
