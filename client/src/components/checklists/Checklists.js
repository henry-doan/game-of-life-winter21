import { useEffect, useState } from 'react';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistList from './ChecklistList';
import { Button } from 'react-bootstrap';
import ChecklistForm from './ChecklistForm';

const Checklists = ({ checklists, getAllChecklists, addChecklist }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllChecklists()
  }, [])

  return (
    <>
      <h1>Checklist</h1>
      { adding ?
          <>
            <ChecklistForm addChecklist={addChecklist} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <ChecklistList checklists={checklists} />
    </>
  )
}

const ConnectedChecklist = (props) => (
  <ChecklistConsumer>
    { value => <Checklists {...props} {...value} />}
  </ChecklistConsumer>
)

export default ConnectedChecklist;


