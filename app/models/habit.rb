class Habit < ApplicationRecord
  belongs_to :user

  validates :title, :notes, :add_sub, :dif_level, :tags, :frequency, :desc, presence: true 
end
