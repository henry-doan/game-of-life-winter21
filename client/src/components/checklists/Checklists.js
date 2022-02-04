import { useEffect, useState } from 'react';
import { ChecklistConsumer } from '../../providers/ChecklistProvider';
import ChecklistList from './ChecklistList';
import { useParams } from 'react-router-dom';
import ChecklistForm from './ChecklistForm';
import { Modal, Button } from 'react-materialize';

const Checklists = ({ getAllChecklists, checklists, addChecklist }) => {
  const [adding, setAdd ] = useState(false);

  const params = useParams();

  useEffect( () => {
    getAllChecklists(params.taskId)
  }, [])
  
  return (
    <>
    <p>Add Checklists</p>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Close</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Modal Header"
        id="Modal-10"
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        trigger={<Button node="button">+</Button>}
      >
        
      <div show={adding} onHide={() => setAdd(false)}>
          <h4>Add Checklist</h4>
          <ChecklistForm
            addChecklist={addChecklist}
            taskId={params.taskId}
            setAdd={setAdd}
          />
      </div>

      </Modal>

    
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