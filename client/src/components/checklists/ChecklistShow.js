import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistForm from './ChecklistForm';

const ChecklistShow = ({ updateChecklist, deleteChecklist, taskId, id }) => {
  const params = useParams();
  const [checklist, setChecklist] = useState({ name: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/tasks/${taskId}/checklists/${id}`)
      .then( res => setChecklist(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name } = checklist
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
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>{name}</h1>
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteChecklist(id)}
          >
            Delete
          </Button>
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