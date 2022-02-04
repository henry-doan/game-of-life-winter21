import { useEffect, useState } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskList from './TaskList';
// import { Button } from 'react-bootstrap';
import TaskForm from './TaskForm';
import { MainContainer, TaskModalBtn } from '../../styles/shared';

const Tasks = ({ tasks, getAllTasks, addTask }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllTasks()
  }, [])

  return (
    <MainContainer>
      <h1>All Tasks</h1>
      { adding ?
          <>
            <TaskForm addTask={addTask} />
            <button onClick={() => setAdding(false)}>Cancel</button>
          </>
        :
        // <button onClick={() => setAdding(true)}>+</button>
        null
      }
      <TaskList tasks={tasks} />
    </MainContainer>
  )
}

const ConnectedTask = (props) => (
  <TaskConsumer>
    { value => <Tasks {...props} {...value} />}
  </TaskConsumer>
)

export default ConnectedTask;