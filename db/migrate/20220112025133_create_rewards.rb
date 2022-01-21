class CreateRewards < ActiveRecord::Migration[6.1]
  def change
    create_table :rewards do |t|
      t.string :award
      t.integer :points
      t.string :image
      t.boolean :achieved
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
