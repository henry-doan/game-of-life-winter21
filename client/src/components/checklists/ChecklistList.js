import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checklists from './Checklists';
import ChecklistShow from './ChecklistShow';

const ChecklistList = ({ checklists, taskId, id}) => {
  return(
    <>
      <ListGroup>
        { checklists.map( c => 
  
              <ChecklistShow {...c} taskId={taskId} />
    
        )}
      </ListGroup>
    </>
  )
}

export default ChecklistList;