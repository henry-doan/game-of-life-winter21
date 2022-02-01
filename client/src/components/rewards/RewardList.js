// import { ListGroup } from 'react-bootstrap';
import Reward from './Reward';

const RewardList = ({ rewards }) => {
  return(
    <>
      <div>
        { rewards.map( r => 
            <Reward {...r} />
        )}
      </div>
    </>
  )
}

export default RewardList;