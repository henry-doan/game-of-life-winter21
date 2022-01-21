import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return(
    <>
       <ListGroup>
        { tasks.map( t => 
         <Task {...t} />
        )}
      </ListGroup>
    </>
  )
}

export default TaskList;