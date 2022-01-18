import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitForm from './HabitForm';

const HabitShow = ({ updateHabit, deleteHabit }) => {
  const params = useParams();
  const [habit, setHabit] = useState({ title: '', notes: '', add_sub: '', dif_levels: '', tags: '', frequency: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/habits/${params.habitId}`)
      .then( res => setHabit(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, notes, add_sub, dif_levels, tags, frequency, id } = habit
  return (
    <>
      { editing ? 
        <>
          <HabitForm 
            {...habit}
            updateTask={updateHabit}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.taskId} {title}</h1>
          <h3>notes: {notes}</h3>
          <h3>add_sub: {add_sub}</h3>
          <h3>dif_levels: {dif_levels}</h3>
          <h3>tags: {tags}</h3>
          <h3>frequency: {frequency}</h3>
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteHabit(id)}
          >
            Delete
          </Button>
        </>
      }
    </>
  )
}

const ConnectedHabitShow = (props) => (
  <HabitConsumer>
    { value => <HabitShow {...props} {...value} /> }
  </HabitConsumer>
)

export default ConnectedHabitShow;