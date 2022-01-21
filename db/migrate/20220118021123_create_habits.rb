class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.string :title
      t.string :notes
      t.boolean :add_sub
      t.string :dif_level
      t.string :tags
      t.string :frequency
      t.string :desc
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
