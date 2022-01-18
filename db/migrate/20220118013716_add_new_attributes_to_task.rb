class AddNewAttributesToTask < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :add_sub, :boolean
    add_column :tasks, :diff_levels, :string
    add_column :tasks, :tags, :string
    add_column :tasks, :frequency, :string
    rename_column :tasks, :task, :title
  end
end
