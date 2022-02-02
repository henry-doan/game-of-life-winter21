import { Collection } from 'react-materialize';
import { Link } from 'react-router-dom';
import Habit from './Habit';
import { Button, Modal } from 'react-materialize';
import HabitForm from './HabitForm';
import { HabitConsumer } from '../../providers/HabitProvider';
// import M from "materialize-css/dist/js/materialize.min.js";

const HabitList = ({ habits, addHabit }) => {
  return(
    <>
      <Collection>
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
      </Collection>
    </>
  )
}

const ConnectedHabitList = (props) => (
  <HabitConsumer>
    { value => <HabitList {...props} {...value} />}
  </HabitConsumer>
)

export default ConnectedHabitList;