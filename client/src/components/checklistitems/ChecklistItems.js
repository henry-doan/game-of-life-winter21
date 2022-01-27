import { useEffect, useState } from 'react';
import { ChecklistItemConsumer } from '../../providers/ChecklistItemProvider';
import ChecklistItemList from './ChecklistItemList';
import { useParams } from 'react-router-dom';
import ChecklistItemForm from './ChecklistItemForm';
import { Button, Form } from 'react-bootstrap';

const ChecklistItems = ({ getAllChecklistItems, checklistitems, checklistId, addChecklistItem }) => {
  const [adding, setAdd ] = useState(false);

  // const params = useParams();

  useEffect( () => {
    getAllChecklistItems(checklistId)
  }, [])
  
  return (
    <>
    <h1>To Do List:</h1>
    <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

          <ChecklistItemForm
            addChecklistItem={addChecklistItem}
            checklistId={checklistId}
            setAdd={setAdd}
          />
        
      <ChecklistItemList checklistitems={checklistitems} checklistId={checklistId} />
    </>
  )
}


const ConnectedChecklistItems = (props) => (
  <ChecklistItemConsumer>
    { value => <ChecklistItems {...props} {...value} />}
  </ChecklistItemConsumer>
)

export default ConnectedChecklistItems;