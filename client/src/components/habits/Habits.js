import { useEffect, useState } from 'react';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitList from './HabitList';
// import { Button } from 'react-bootstrap';
import HabitForm from './HabitForm';
import { MainContainer } from '../../styles/shared';

const Habits = ({ habits, getAllHabits, addHabit }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllHabits()
  }, [])

  return (
    <MainContainer>
      <h1>All Habits</h1>
      { adding ?
          <>
            <HabitForm addHabit={addHabit} />
            <button variant="info" onClick={() => setAdding(false)}>Cancel</button>
          </>
        :
        <button variant="info" onClick={() => setAdding(true)}>+</button>
      }
      <HabitList habits={habits} />
    </MainContainer>
  )
}

const ConnectedHabit = (props) => (
  <HabitConsumer>
    { value => <Habits {...props} {...value} />}
  </HabitConsumer>
)

export default ConnectedHabit;









