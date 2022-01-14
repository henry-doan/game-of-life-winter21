import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RewardList = ({ rewards }) => {
  return(
    <>
      <ListGroup>
        { rewards.map( r => 
          <Link to={`/rewards/${r.id}`}>
            <ListGroup.Item>{r.award} Point Value: {r.points}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default RewardList;