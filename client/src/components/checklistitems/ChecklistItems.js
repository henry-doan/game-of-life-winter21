import { useEffect, useState } from 'react';
import { ChecklistItemsConsumer } from '../../providers/ChecklistItemsProvider';
import ChecklistItemsList from './ChecklistItemsList';
import { useParams } from 'react-router-dom';
import ChecklistItemForm from './ChecklistItemForm';
import { Button, Form } from 'react-bootstrap';

const Checklists = ({ getAllChecklistItems, checklistitems, addChecklistItem }) => {
  const [adding, setAdd ] = useState(false);

  const params = useParams();

  useEffect( () => {
    getAllChecklistItems(params.checklistId)
  }, [])
  
  return (
    <>
    <h1>To Do List:</h1>
    <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

          <ChecklistItemForm
            addChecklistItem={addChecklistItem}
            checklistId={params.checklistId}
            setAdd={setAdd}
          />
        
      <ChecklistItemList checklistitems={checklistitems} checklistId={params.checklistId} />
    </>
  )
}


const ConnectedChecklistItems = (props) => (
  <ChecklistItemConsumer>
    { value => <ChecklistItems {...props} {...value} />}
  </ChecklistItemConsumer>
)

export default ConnectedChecklistItems;