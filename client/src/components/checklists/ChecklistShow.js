import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistForm from './ChecklistForm';

const ChecklistShow = ({ updateChecklist, deleteChecklist }) => {
  const params = useParams();
  const [checklist, setChecklist] = useState({ name: '', complete: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/checklist/${params.checklistId}`)
      .then( res => setChecklist(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, complete, id } = checklist
  return (
    <>
      { editing ? 
        <>
          <ChecklistForm 
            {...checklist}
            updateChecklist={updateChecklist}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.checklistId} {name}</h1>
          <h3>complete: {complete}</h3>
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