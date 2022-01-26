class Checklist < ApplicationRecord
  belongs_to :task

  validates :name, presence: true

  has_many :checklistitems, dependent: :destroy

end
