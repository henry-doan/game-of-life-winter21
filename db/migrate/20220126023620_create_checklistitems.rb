class CreateChecklistitems < ActiveRecord::Migration[6.1]
  def change
    create_table :checklistitems do |t|
      t.string :name
      t.boolean :complete
      t.belongs_to :task, null: false, foreign_key: true
      t.belongs_to :checklist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
