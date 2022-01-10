class Task < ApplicationRecord
  belongs_to :user

  validates :task, :due, :comment, :image, :reward_id, :complete, presence: true

  has_many :rewards, dependent: :destroy

end
