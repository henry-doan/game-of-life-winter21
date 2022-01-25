class Reward < ApplicationRecord
  belongs_to :user

  validates :award, :points, :tags, :notes, presence: true

  has_many :checklists, dependent: :destroy
end
