class Checklist < ApplicationRecord
  belongs_to :task

  validates :name, :complete, presence: true
end
