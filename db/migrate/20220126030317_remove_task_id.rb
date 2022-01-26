class RemoveTaskId < ActiveRecord::Migration[6.1]
  def change
    remove_index :checklistitems, name: 'index_checklistitems_on_task_id'

    remove_column :checklistitems, :task_id
  end
end
