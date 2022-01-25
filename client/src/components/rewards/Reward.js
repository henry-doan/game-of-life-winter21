import {ActivityConsumer} from '../../providers/ActivityProvider';
import {AuthConsumer} from '../../providers/AuthProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Reward = ({ user, award, id, title, points, notes, tags, achieved, addActivity, updatePoints, updateReward }) => {

  const addRewardActivity = ( title, points ) => {
    const Activity = {activity_type: 'Reward', title: title}
    addActivity(Activity)
    let newpoints = 0
    if (user.points >= points) {
      newpoints = user.points - points
      alert('Redeemed!');
    } else  if (user.points < points) {
      alert('Not enough points.')
    }
    // updateReward(id, { title, award, achieved: true, notes, tags, points })
    // let newpoints = (user.points - redeemValue(points))
    updatePoints(newpoints)
  }

  return (
    <>
    
    <Link to={`/rewards/${id}`}>
      <p>{award} Points: {points}</p>
    </Link>
    <br />
    <Button 
      variant="success"
      onClick={() => addRewardActivity(award, points)}
    >
    Redeem
    </Button> 

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

