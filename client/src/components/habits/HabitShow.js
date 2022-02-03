import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitForm from './HabitForm';
import { Modal, Button } from 'react-materialize';
import { MainContainer } from '../../styles/shared';

const HabitShow = ({ updateHabit, deleteHabit }) => {
  const params = useParams();
  const [habit, setHabit] = useState({ title: '', notes: '', add_option: false, sub_option: false, dif_level: '', tags: '', frequency: '' })

  useEffect( () => {
    axios.get(`/api/habits/${params.habitId}`)
      .then( res => setHabit(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, notes, add_option, sub_option, dif_level, tags, frequency, id } = habit
  return (
    <MainContainer>
      <h1>Id: {params.taskId} {title}</h1>
      <h3>notes: {notes}</h3>
      <h3>add_option: {add_option ? 'true' : 'false'}</h3>
      <h3>sub_option: {sub_option ? 'true' : 'false'}</h3>
      <h3>dif_level: {dif_level}</h3>
      <h3>tags: {tags}</h3>
      <h3>frequency: {frequency}</h3>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Cancel</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Edit Habit"
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
        trigger={<Button node="button">Edit</Button>}
      >
        <HabitForm {...habit} updateHabit={updateHabit}/>  
      </Modal>
      <Button 
        variant="danger"
        onClick={() => deleteHabit(id)}
      >
        Delete
      </Button>
    </MainContainer>
  )
}

const ConnectedHabitShow = (props) => (
  <HabitConsumer>
    { value => <HabitShow {...props} {...value} /> }
  </HabitConsumer>
)

export default ConnectedHabitShow;