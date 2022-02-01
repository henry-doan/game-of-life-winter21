// import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return(
    <>
       <div>
        { tasks.map( t => 
         <Task {...t} />
        )}
      </div>
    </>
  )
}

export default TaskList;