import { ListGroup } from 'react-bootstrap';
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