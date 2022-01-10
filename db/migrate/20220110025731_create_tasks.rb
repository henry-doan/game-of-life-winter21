class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :task
      t.datetime :due
      t.text :comment
      t.string :image
      t.bigint :reward_id
      t.boolean :complete
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
