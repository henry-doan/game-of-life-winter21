import { Link } from 'react-router-dom';
import Task from './Task';
import { Button, Modal, Collection } from 'react-materialize';
import TaskForm from './TaskForm';
import { TaskConsumer } from '../../providers/TaskProvider';
import { TaskContainer, TaskModal, TaskModalBtn } from '../../styles/shared'

const TaskList = ({ tasks, addTask }) => {
  return(
    <>
     <TaskContainer>
       <p style={{fontSize: "18px", margin: "-2px 0px 12px 0px", color: "grey", fontWeight: "bold"}}>To Do List</p>
        { tasks.map( t => 
         <Task {...t} />
        )}
        </TaskContainer>
        <TaskModal
          actions={[
            <Button flat modal="close" node="button" waves="green">Cancel</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Edit To Do"
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
          trigger={<TaskModalBtn node="button">+</TaskModalBtn>}
        >
          <TaskForm addTask={addTask} />

        </TaskModal>
    </>
  )
}

const ConnectedTaskList = (props) => (
  <TaskConsumer>
    { value => <TaskList {...props} {...value} />}
  </TaskConsumer>
)

export default ConnectedTaskList;