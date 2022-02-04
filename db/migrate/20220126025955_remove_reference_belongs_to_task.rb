class RemoveReferenceBelongsToTask < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :checklistitems, column: :task_id
  end
end
