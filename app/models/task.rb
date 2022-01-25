class Task < ApplicationRecord
  belongs_to :user

  validates :title, :comment, :diff_levels, :tags, :frequency, presence: true

end
