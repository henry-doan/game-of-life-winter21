import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChecklistItemShow from './ChecklistItemShow';

const ChecklistItemList = ({ checklistitems, checklistId, id}) => {
  return(
    <>
      <ListGroup>
        { checklistitems.map( c => 
  
              <ChecklistItemShow {...c} checklistId={checklistId} />
    
        )}
      </ListGroup>
    </>
  )
}

export default ChecklistItemList;