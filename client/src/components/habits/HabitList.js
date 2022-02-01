// import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Habit from './Habit';

const HabitList = ({ habits }) => {
  return(
    <>
      <div>
        { habits.map( h => 
         <Habit {...h} />
        )}
      </div>
    </>
  )
}

export default HabitList;