import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ChecklistItemConsumer } from '../../providers/ChecklistItemProvider';
import ChecklistItemForm from './ChecklistItemForm';

const ChecklistItemShow = ({ updateChecklistItem, deleteChecklistItem, checklistId, id }) => {
  const params = useParams();
  const [checklistitem, setChecklistItem] = useState({ name: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/checklists/${checklistId}/checklistitems/${id}`)
      .then( res => setChecklistItem(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name } = checklistitem
  return (
    <>
      
      { editing ? 
        <>
          <ChecklistItemForm 
            {...checklistitem}
            checklistId={checklistId}
            updateChecklistItem={updateChecklistItem}
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
            onClick={() => deleteChecklistItem(id)}
          >
            Delete
          </Button>
        </>
      }
    </>
  )
}

const ConnectedChecklistItemShow = (props) => (
  <ChecklistItemConsumer>
    { value => <ChecklistItemShow {...props} {...value} /> }
  </ChecklistItemConsumer>
)

export default ConnectedChecklistItemShow;