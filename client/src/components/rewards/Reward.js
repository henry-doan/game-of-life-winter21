import {ActivityConsumer} from '../../providers/ActivityProvider';
import {AuthConsumer} from '../../providers/AuthProvider';
import {Link} from 'react-router-dom';
import { useReducer } from 'react';
// import { Button } from 'react-bootstrap';
import {RewardConsumer} from '../../providers/RewardProvider';

const Reward = ({ user, award, id, title, points, addActivity, updatePoints, }) => {

  const addRewardActivity = ( title, points ) => {
    const Activity = { activity_type: 'Reward', title: title }

    addActivity(Activity)
    let newpoints = 0     
    if (user.points >= points) {
      newpoints = user.points - points
      updatePoints(newpoints)
      alert('Redeemed!');
    } else if (user.points < points) {
      alert('Not enough points.')
    } 

  }

  return (
    <>
    
    <Link to={`/rewards/${id}`}>
      <p>{award}</p>
    </Link>
    <br />
    <button 
      variant="success"
      onClick={() => addRewardActivity(award, points)}
    >
    Redeem
    </button>
    <br />
    </>
  )
}


const ConnectedReward = (props) => (
  <ActivityConsumer>
    { value => <Reward {...props} {...value} /> }
  </ActivityConsumer>
)

const ConnectedRewardReward = (props) => (
  <RewardConsumer>
    { value => <ConnectedReward {...props} {...value} /> }
  </RewardConsumer>
)

const ConnectedAuthReward = (props) => (
  <AuthConsumer>
    { value => <ConnectedRewardReward {...props} {...value} /> }
  </AuthConsumer>
)


export default ConnectedAuthReward;