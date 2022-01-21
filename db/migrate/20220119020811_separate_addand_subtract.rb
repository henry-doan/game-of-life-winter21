class SeparateAddandSubtract < ActiveRecord::Migration[6.1]
  def change
    rename_column :tasks, :add_sub, :add_option
    add_column :tasks, :sub_option, :boolean
  end
end
