import { useState, useEffect } from 'react';
import { InputSlot, BlackLabel, RewardButton } from '../../styles/shared';
import ChecklistList from '../checklists/ChecklistList';
import { Select } from 'react-materialize';

const TaskForm = ({id, taskId, title, setEdit, setAdd, comment, add_sub, diff_levels, tags, frequency, complete, updateTask, addTask, checklists}) => {
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
    setEdit(false)
  } else {
    addTask(task)
    setAdd(false)
  }
  setTask({ title: '', comment: '', diff_levels: 'Easy', tags: '', frequency: 'Daily', complete: false})
}


return (
  <>
    <form onSubmit={handleSubmit}>
      <BlackLabel>Task:</BlackLabel>
      <InputSlot 
        type="text"
        name="title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value})}
        required
      />
      <BlackLabel>Note:</BlackLabel>
      <InputSlot
        type="text"
        name="comment"
        value={task.comment}
        onChange={(e) => setTask({ ...task, comment: e.target.value})}
        required
      />

      <BlackLabel>Difficulty</BlackLabel>
      <Select
        id="diff_levels"
        multiple={false}
        onChange={(e) => setTask({ ...task, diff_levels: e.target.value})}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value=""
      >
        <option
          disabled
          value=""
        >
          Choose your option
        </option>
        <option value="Easy">
          Easy
        </option>
        <option value="Medium">
          Medium
        </option>
        <option value="Difficult">
          Difficult
        </option>
      </Select>

      <BlackLabel>Tags</BlackLabel>
      <InputSlot
        type="text"
        id="tags"
        name="tags"
        value={task.tags}
        onChange={(e) => setTask({ ...task, tags: e.target.value})}
        />

      <BlackLabel>Reset Counter</BlackLabel>
    
      <Select
        id="frequency"
        multiple={false}
        onChange={(e) => setTask({ ...task, frequency: e.target.value})}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value=""
      >
        <option
          disabled
          value=""
        >
          Choose your option
        </option>
        <option value="Daily">
          Daily
        </option>
        <option value="Weekly">
          Weekly
        </option>
        <option value="Monthly">
          Monthly
        </option>
        <option value="Annually">
          Annually
        </option>
      </Select>


      <RewardButton type="submit">Submit</RewardButton>

    </form>

  </>
  )
}

export default TaskForm;