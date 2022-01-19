import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HabitList = ({ habits }) => {
  return(
    <>
      <ListGroup>
        { habits.map( h => 
          <Link to={`/habits/${h.id}`}>
            <ListGroup.Item>
              {h.title}
            </ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default HabitList;