import { useState, useEffect } from 'react';

const TaskForm = ({id, title, comment, add_sub, diff_levels, tags, frequency, complete, updateTask, addTask}) => {
  const [task, setTask ] = useState({ title: '', comment: '', diff_levels: 'Easy', tags: '', frequency: 'Daily', complete: false})


useEffect( () => {
  if (id) {
    setTask({ title, comment, add_sub, diff_levels, tags, frequency, complete })
  }
},  [])

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateTask(id, task)
  } else {
    addTask(task)
  }
  setTask({ title: '', comment: '', diff_levels: 'Easy', tags: '', frequency: 'Daily', complete: false})
}


return (
  <>
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input 
        type="text"
        name="title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value})}
        required
      />
      <label>Note:</label>
      <input 
        type="text"
        name="comment"
        value={task.comment}
        onChange={(e) => setTask({ ...task, comment: e.target.value})}
        required
      />



      <label>Difficulty</label>
      <select id="diff_levels" name="diff_levels" onChange={(e) => setTask({ ...task, diff_levels: e.target.value})}> 
        <option value='Easy' selected>Easy</option>
        <option value='Medium'>Medium</option>
        <option value='Difficult'>Difficult</option>
      </select>

      <label>Tags</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={task.tags}
        onChange={(e) => setTask({ ...task, tags: e.target.value})}
        />

      <label>Reset Counter</label>
      <select id="frequency" name="frequency"> 
        <option value='Daily' selected>Daily</option>
        <option value='Weekly'>Weekly</option>
        <option value='Monthly'>Monthly</option>
        <option value='Annually'>Annually</option>
      </select> 
      <button type="submit">Submit</button>

    </form>

  </>
  )
}

export default TaskForm;