import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return(
    <>
      <ListGroup>
        { tasks.map( p => 
          <Link to={`/tasks/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default TaskList;