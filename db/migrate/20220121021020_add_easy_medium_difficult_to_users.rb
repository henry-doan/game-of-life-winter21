class AddEasyMediumDifficultToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :easy, :integer, default: 5
    add_column :users, :medium, :integer, default: 10
    add_column :users, :difficult, :integer, default: 15
  end
end
