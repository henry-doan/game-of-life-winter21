import { ListGroup } from 'react-bootstrap';
import Reward from './Reward';

const RewardList = ({ rewards }) => {
  return(
    <>
      <ListGroup>
        { rewards.map( r => 
            <Reward {...r} />
        )}
      </ListGroup>
    </>
  )
}

export default RewardList;