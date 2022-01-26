import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChecklistList = ({ checklists, taskId }) => {
  return(
    <>
      <ListGroup>
        { checklists.map( c => 
          <Link to={`/tasks/${taskId}/checklists/${c.id}`}>
            <ListGroup.Item>{c.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default ChecklistList;