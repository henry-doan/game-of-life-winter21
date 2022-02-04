import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import Checklists from '../checklists/Checklists';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal, Button, Row, Col, Card, Icon} from 'react-materialize'
import { MainContainer, TaskModal, InputSlot } from '../../styles/shared';

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
    <Row>
      <Col
        // m={6}
        // s={12}
      >
        <Card style={{ background: "#F8f8f8", borderRadius: "20px", width: "500px", height: "400px", margin: "10% 50% 50% 50%"}}
          actions={[
            <a key="1" href="#">
              <TaskModal
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
                trigger={<Button style={{border: "1px #f1f1f1 solid", borderRadius: "2px", color: "black", background: "white", boxShadow: "none", width: "120px"}} node="button">Edit</Button>}
              >
                <TaskForm {...task} updateTask={updateTask}/>  
              </TaskModal>
              </a>,
            <a key="2" href="#">
              <Button style={{ width: "120px", border: "1px #f1f1f1 solid", borderRadius: "2px", color: "black", background: "white", boxShadow: "none"}}
                variant="danger"
                onClick={() => deleteTask(id)}
              >
                Delete
              </Button>            
              </a>
          ]}
          // className="blue-grey darken-1"
          
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          // textClassName="white-text"
          title={title}
        >
        <h5>{title}</h5>
        <h5>Tags: {tags}</h5>
        </Card>
      </Col>
    </Row>

    
    

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







