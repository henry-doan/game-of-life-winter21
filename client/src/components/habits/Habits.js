import { useEffect, useState } from 'react';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitList from './HabitList';
import { Button } from 'react-bootstrap';
import HabitForm from './HabitForm';

const Habits = ({ habits, getAllHabits, addHabit }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllHabits()
  }, [])

  return (
    <>
      <h1>All Habits</h1>
      { adding ?
          <>
            <HabitForm addHabit={addHabit} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <HabitList habits={habits} />
    </>
  )
}

const ConnectedHabit = (props) => (
  <HabitConsumer>
    { value => <Habits {...props} {...value} />}
  </HabitConsumer>
)

export default ConnectedHabit;