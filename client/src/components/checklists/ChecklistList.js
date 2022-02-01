// import { ListGroup } from 'react-bootstrap';
import ChecklistShow from './ChecklistShow';

const ChecklistList = ({ checklists, taskId, id}) => {
  return(
    <>
      <div>
        { checklists.map( c => 
  
              <ChecklistShow {...c} taskId={taskId} />
    
        )}
      </div>
    </>
  )
}

export default ChecklistList;