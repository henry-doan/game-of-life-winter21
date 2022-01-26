import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import Checklists from '../checklists/Checklists';

const TaskShow = ({ updateTask, deleteTask, checklist }) => {
  const params = useParams();
  const [task, setTask] = useState({ title: '', comment: '', diff_levels: '', tags: '', frequency: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/tasks/${params.taskId}`)
      .then( res => setTask(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, comment, diff_levels, tags, frequency, id } = task
  return (
    <>
      { editing ? 
        <>
          <TaskForm 
            {...task}
            updateTask={updateTask}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.taskId} {title}</h1>
          <h3>comment: {comment}</h3>
          <h3>diff_levels: {diff_levels}</h3>
          <h3>tags: {tags}</h3>
          <h3>frequency: {frequency}</h3>
          <Checklists taskId={id} />
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteTask(id)}
          >
            Delete
          </Button>
        </>
      }
    </>
  )
}

const ConnectedTaskShow = (props) => (
  <TaskConsumer>
    { value => <TaskShow {...props} {...value} /> }
  </TaskConsumer>
)

export default ConnectedTaskShow;









