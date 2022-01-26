import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checklists from './Checklists';

const ChecklistList = ({ checklists, taskId, id}) => {
  return(
    <>
      <ListGroup>
        { checklists.map( c => 
           <Link to={`/tasks/${taskId}/checklists/${id}`} >
             <ListGroup.Item>{c.name}</ListGroup.Item>
           </Link>
        )}
      </ListGroup>
    </>
  )
}

export default ChecklistList;