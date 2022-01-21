import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Habit from './Habit';

const HabitList = ({ habits }) => {
  return(
    <>
      <ListGroup>
        { habits.map( h => 
         <Habit {...h} />
        )}
      </ListGroup>
    </>
  )
}

export default HabitList;