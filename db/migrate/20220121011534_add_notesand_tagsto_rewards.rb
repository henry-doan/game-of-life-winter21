class AddNotesandTagstoRewards < ActiveRecord::Migration[6.1]
  def change
    add_column :rewards, :tags, :string
    add_column :rewards, :notes, :text
  end
end
