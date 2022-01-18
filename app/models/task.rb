class Task < ApplicationRecord
  belongs_to :user, dependent: :destroy

  validates :title, :comment, :add_sub, :diff_levels, :tags, :frequency, presence: true

end
