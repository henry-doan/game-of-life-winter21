import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button, ListGroup } from 'react-bootstrap';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistForm from './ChecklistForm';
import ChecklistItems from '../checklistitems/ChecklistItems';
import { ChecklistItemConsumer } from '../../providers/ChecklistItemProvider';

const ChecklistShow = ({ updateChecklist, deleteChecklist, checklistitems, taskId, id }) => {
  const params = useParams();
  const [checklist, setChecklist] = useState({ name: '', complete: true})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/tasks/${taskId}/checklists/${id}`)
      .then( res => setChecklist(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, complete } = checklist
  return (
    <>
      
      { editing ? 
        <>
          <ChecklistForm 
            {...checklist}
            taskId={taskId}
            updateChecklist={updateChecklist}
            setEdit={setEdit}
          />
          <button variant="warning" onClick={() => setEdit(false)}>Cancel</button>
          <br />
        </>
        :
        <>
        <br />
          <h3>{name}</h3>
  
          <ChecklistItems checklistId={id} />   
          <button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            variant="danger"
            onClick={() => deleteChecklist(taskId, id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}


const ConnectedChecklistShow = (props) => (
  <ChecklistConsumer>
    { value => <ChecklistShow {...props} {...value} /> }
  </ChecklistConsumer>
)


export default ConnectedChecklistShow;