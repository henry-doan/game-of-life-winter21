import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return(
    <>
      <ListGroup>
        { tasks.map( t => 
          <Link to={`/tasks/${t.id}`}>
            <ListGroup.Item>{t.title}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default TaskList;