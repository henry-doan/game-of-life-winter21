class SeparateAddandSubtractforHabit < ActiveRecord::Migration[6.1]
  def change
    rename_column :habits, :add_sub, :add_option
    add_column :habits, :sub_option, :boolean
  end
end
