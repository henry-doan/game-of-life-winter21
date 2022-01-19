import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RewardList = ({ rewards }) => {
  return(
    <>
      <ListGroup>
        { rewards.map( p => 
          <Link to={`/rewards/${p.id}`}>
            <ListGroup.Item>{p.award}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default RewardList;