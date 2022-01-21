class Habit < ApplicationRecord
  belongs_to :user

  validates :title, :notes, :dif_level, :tags, :frequency, presence: true 
end
