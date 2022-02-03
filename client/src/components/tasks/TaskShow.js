import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import Checklists from '../checklists/Checklists';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal, Button} from 'react-materialize'
import { MainContainer } from '../../styles/shared';

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
        <MainContainer>
          <h1>{title}</h1>
          <h3>Difficulty Level: {diff_levels}</h3>
          <p>
            {comment}
          </p>
          <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Cancel</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Edit Task"
        id="Modal-10"
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        trigger={<Button node="button">Edit</Button>}
      >
        <TaskForm {...task} updateTask={updateTask}/>  
      </Modal>
      <Button 
        variant="danger"
        onClick={() => deleteTask(id)}
      >
        Delete
      </Button>
    </MainContainer>
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








