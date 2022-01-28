import { useEffect, useState } from 'react';
import { ChecklistItemConsumer } from '../../providers/ChecklistItemProvider';
import ChecklistItemList from './ChecklistItemList';
import { useParams } from 'react-router-dom';
import ChecklistItemForm from './ChecklistItemForm';
import { Button, Form, Modal } from 'react-bootstrap';


const ChecklistItems = ({ getAllChecklistItems, checklistitems, checklistId, addChecklistItem }) => {
  const [adding, setAdd ] = useState(false);
  

  // const params = useParams();

  useEffect( () => {
    getAllChecklistItems(checklistId)
  }, [])
  
  return (
    <>
    <p>To Do List:</p>
    <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Checklist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChecklistItemForm
            addChecklistItem={addChecklistItem}
            checklistId={checklistId}
            setAdd={setAdd}
          />
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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