import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { ChecklistItemConsumer } from '../../providers/ChecklistItemProvider';
import ChecklistItemForm from './ChecklistItemForm';

const ChecklistItemShow = ({ updateChecklistItem, deleteChecklistItem, checklistId, id }) => {
  const params = useParams();
  const [checklistitem, setChecklistItem] = useState({ name: '', complete: false})
  const [editing, setEdit] = useState(false)
  const [checked, setChecked] = useState(false);

  useEffect( () => {
    axios.get(`/api/checklists/${checklistId}/checklistitems/${id}`)
      .then( res => setChecklistItem(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, complete } = checklistitem
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
          <button variant="warning" onClick={() => setEdit(false)}>Cancel</button>
          <br />
        </>
        :
        <>
          
            <form>
              <input
                type="checkbox"
                checked={checked}
                value={checklistitem.complete}
                onChange={(e) => setChecklistItem({...checklistitem, complete: e.target.checked })}
              />
            </form>
            <p style={complete ? {...styles.completed} : null}>{name}</p>
          <button 
            variant="info" 
            onClick={() => setEdit(true)}
            size="sm" 
          >
            Edit
          </button>
          <button 
            variant="light"
            onClick={() => deleteChecklistItem(checklistId, id)}
            size="sm" 
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

const styles = {
  completed: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

const ConnectedChecklistItemShow = (props) => (
  <ChecklistItemConsumer>
    { value => <ChecklistItemShow {...props} {...value} /> }
  </ChecklistItemConsumer>
)

export default ConnectedChecklistItemShow;