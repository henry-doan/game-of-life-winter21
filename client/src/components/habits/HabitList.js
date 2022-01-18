import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HabitList = ({ habits }) => {
  return(
    <>
      <ListGroup>
        { habits.map( p => 
          <Link to={`/habits/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default HabitList;