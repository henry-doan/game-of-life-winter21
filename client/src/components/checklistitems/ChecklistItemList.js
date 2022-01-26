import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChecklistItem from './ChecklistItem';
import ChecklistItemShow from './ChecklistItemShow';

const ChecklistItemList = ({ checklistItem, checklistId, id}) => {
  return(
    <>
      <ListGroup>
        { checklistItem.map( c => 
  
              <ChecklistItemShow {...c} checklistId={checklistId} />
    
        )}
      </ListGroup>
    </>
  )
}

export default ChecklistItemList;