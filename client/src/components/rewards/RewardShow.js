import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import { ActivityConsumer } from '../../providers/ActivityProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const RewardShow = ({ updateReward, deleteReward, addActivity, updatePoints, user }) => {
  const params = useParams();
  const [reward, setReward] = useState({ award: '', points: '', notes: '', tags: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/rewards/${params.rewardId}`)
      .then( res => setReward(res.data))
      .catch( err => console.log(err))
  }, [])

  const addRewardActivity = ( title, points ) => {
    const activity = {activity_type: 'Reward', title: title}
    addActivity(activity)     
    let newpoints = 0     
    if (user.points >= points) {
      newpoints = user.points - points
      updatePoints(newpoints)
      alert('Redeemed!');
    } else if (user.points < points) {
      alert('Not enough points.')
    } 
  }

  const { award, points, notes, tags, id } = reward
  return (
    <>
      { editing ? 
        <>
          <RewardForm 
            {...reward}
            updateReward={updateReward}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.rewardId} {award}</h1>
          <h3>Points: {points}</h3>
          <h5>Notes: {notes}
          </h5>
          <h5>Tags: {tags}</h5>
          <button 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteReward(id)}
          >
            Delete
          </button>
          <button 
            onClick={() => addRewardActivity(award, points)}
          >
            Redeem
          </button>
        </>
      }
    </>
  )
}

const ConnectedRewardShow = (props) => (
  <RewardConsumer>
    { value => <RewardShow {...props} {...value} /> }
  </RewardConsumer>
)

const ConnectedActivityRewardShow = (props) => (
  <ActivityConsumer>
    { value => <ConnectedRewardShow {...props} {...value} /> }
  </ActivityConsumer>
)

const ConnectedAuthReward = (props) => (
  <AuthConsumer>
    { value => <ConnectedActivityRewardShow {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedAuthReward;