import { useEffect, useState } from 'react';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistList from './ChecklistList';
import { useParams } from 'react-router-dom';
import ChecklistForm from './ChecklistForm';
// import { Button, Modal } from 'react-bootstrap';

const Checklists = ({ getAllChecklists, checklists, addChecklist }) => {
  const [adding, setAdd ] = useState(false);

  const params = useParams();

  useEffect( () => {
    getAllChecklists(params.taskId)
  }, [])
  
  return (
    <>
    <p>Add Checklists</p>
    <button data-target="modal1" class="btn modal-trigger" onClick={() => setAdd(true)}>+</button>
    {/* <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button> */}
      
      {/* <!-- Modal Structure --> */}
      <div id="modal1" class="modal" show={adding} onHide={() => setAdd(false)}>
        <div class="modal-content">
          <h4>Add Checklist</h4>
          <ChecklistForm
            addChecklist={addChecklist}
            taskId={params.taskId}
            setAdd={setAdd}
          />
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>

      {/* <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Checklist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChecklistForm
            addChecklist={addChecklist}
            taskId={params.taskId}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      <ChecklistList checklists={checklists} taskId={params.taskId} />
    </>
  )
}


const ConnectedChecklists = (props) => (
  <ChecklistConsumer>
    { value => <Checklists {...props} {...value} />}
  </ChecklistConsumer>
)

export default ConnectedChecklists;