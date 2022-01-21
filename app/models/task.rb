class Task < ApplicationRecord
  belongs_to :user, dependent: :destroy

  validates :title, :comment, :diff_levels, :tags, :frequency, presence: true

end
