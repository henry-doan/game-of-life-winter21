import { Link } from 'react-router-dom';
import Habit from './Habit';
import { Button, Modal } from 'react-materialize';
import HabitForm from './HabitForm';
import { HabitConsumer } from '../../providers/HabitProvider';
import { HabitContainer } from '../../styles/shared'

const HabitList = ({ habits, addHabit }) => {
  return(
    <>
      <HabitContainer>
      <p style={{fontSize: "18px", margin: "-2px 0px 12px 0px", color: "grey", fontWeight: "900"}}>Habits</p>
        { habits.map( h => 
         <Habit {...h} />
        )}
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Cancel</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Add Habit"
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
          <HabitForm addHabit={addHabit} />
        </Modal>
        </HabitContainer>
    </>
  )
}

const ConnectedHabitList = (props) => (
  <HabitConsumer>
    { value => <HabitList {...props} {...value} />}
  </HabitConsumer>
)

export default ConnectedHabitList;