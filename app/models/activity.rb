class Activity < ApplicationRecord
  belongs_to :user
  
  validates :activity_type, :title, presence: true 
end
