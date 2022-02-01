import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitForm from './HabitForm';

const HabitShow = ({ updateHabit, deleteHabit }) => {
  const params = useParams();
  const [habit, setHabit] = useState({ title: '', notes: '', add_option: false, sub_option: false, dif_level: '', tags: '', frequency: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/habits/${params.habitId}`)
      .then( res => setHabit(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, notes, add_option, sub_option, dif_level, tags, frequency, id } = habit
  return (
    <>
      { editing ? 
        <>
          <HabitForm 
            {...habit}
            updateHabit={updateHabit}
          />
          <button variant="warning" onClick={() => setEdit(false)}>Cancel</button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.taskId} {title}</h1>
          <h3>notes: {notes}</h3>
          <h3>add_option: {add_option ? 'true' : 'false'}</h3>
          <h3>sub_option: {sub_option ? 'true' : 'false'}</h3>
          <h3>dif_level: {dif_level}</h3>
          <h3>tags: {tags}</h3>
          <h3>frequency: {frequency}</h3>
          <button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            variant="danger"
            onClick={() => deleteHabit(id)}
          >
            Delete
          </button>
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