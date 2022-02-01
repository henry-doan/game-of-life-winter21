// import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChecklistItemShow from './ChecklistItemShow';

const ChecklistItemList = ({ checklistitems, checklistId, id}) => {
  return(
    <>
      <div>
        { checklistitems.map( c => 
  
              <ChecklistItemShow {...c} checklistId={checklistId} />
    
        )}
      </div>
    </>
  )
}

export default ChecklistItemList;