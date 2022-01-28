import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import Checklists from '../checklists/Checklists';
import styled from 'styled-components';

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
        <br />
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Difficulty Level: {diff_levels}</Card.Subtitle>
          <Card.Text>
            {comment}
          </Card.Text>
          <Card.Link variant="warning" onClick={() => setEdit(true)}>Edit</Card.Link>
          <Card.Link  variant="danger" onClick={() => deleteTask(id)}>Delete</Card.Link>
          <Checklists taskId={id} />
          </Card.Body>
        </Card>


          {/* <HeaderText fsize="large">Task: {title}</HeaderText>
          <HeaderText2 fsize="small">Comment: {comment}  Difficulty Level: {diff_levels}</HeaderText2>
          <HeaderText2 fsize="small">Tags: {tags} Frequency: {frequency}</HeaderText2>
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
      </Button> */}
        </> 
      }
    </>
  )
}

const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '4rem';
    case 'small':
      return '1rem';
    default:
      return '2rem';
  }
}

const HeaderText = styled.h1`
  color: green !important;
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`
const HeaderText2 = styled.h2`
  color: black !important;
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`


const ConnectedTaskShow = (props) => (
  <TaskConsumer>
    { value => <TaskShow {...props} {...value} /> }
  </TaskConsumer>
)

export default ConnectedTaskShow;








