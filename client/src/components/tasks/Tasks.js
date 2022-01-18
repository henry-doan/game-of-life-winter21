import { useEffect, useState } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskList from './TaskList';
import { Button } from 'react-bootstrap';
import TaskForm from './TaskForm';

const Tasks = ({ tasks, getAllTasks, addTask }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllTasks()
  }, [])

  return (
    <>
      <h1>All Tasks</h1>
      { adding ?
          <>
            <TaskForm addTask={addTask} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <TaskList tasks={tasks} />
    </>
  )
}

const ConnectedTask = (props) => (
  <TaskConsumer>
    { value => <Tasks {...props} {...value} />}
  </TaskConsumer>
)

export default ConnectedTask;