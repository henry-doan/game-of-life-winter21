// import { useState, useEffect } from 'react';

// const TaskForm = ({id, task, due, comment, image, reward_id, complete}) => {
//   const [task, setTask ] = useState({ task: '', due: '', comment: '', image: '', reward_id: 0, complete: false})


// useEffect( () => {
//   if (id) {
//     setTask({ task, due, comment, image, reward_id, complete })
//   }
// },  [])

// const handleSubmit = (e) => {
//   e.preventDefault()
//   if (id) {
//     updateTask(id, task)
//   } else {
//     addTask(task)
//   }
//   setTask({ task: '', due: '', comment: '', image: '', reward_id: 0, complete: false})
// }

// return (
//   <>
//     <form onSubmit={handleSubmit}>
//       <label>Task:</label>
//       <input 
//         type="text"
//         name="Task"
//         value={task.task}
//         onChange={(e) => setTask({ ...task, task: e.target.value})}
//         required
//       />
//       <label>Due:</label>
//       <input 
//         type="date"
//         name="Due Date"
//         value={task.due}
//         onChange={(e) => setTask({ ...task, due: e.target.value})}
//         required
//       />
//       <label>Add any notes about your task:</label>
//       <textarea 
//         type="text"
//         name="comment"
//         value={task.comment}
//         onChange={(e) => setTask({ ...task, comment: e.target.value})}
//       ></textarea>
//       <label>Image:</label>
//       <textarea 
//         type="text"
//         name="image"
//         value={task.image}
//         onChange={(e) => setTask({ ...task, image: e.target.value})}
//       />
//       {/* I have no idea how to do the reward one */}
//       <label>Choose Your Reward:</label>
//       <select id="rewards" name="rewars"> 
//         <option value={task.reward_id}></option>
//       </select>
//       {/* I'd like to do the complete one with a style change */}
//       <button type="submit">Submit</button>

//     </form>

//   </>
// )
// }

// export default TaskForm;