import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import { ActivityConsumer } from '../../providers/ActivityProvider';

const RewardShow = ({ updateReward, deleteReward, addActivity }) => {
  const params = useParams();
  const [reward, setReward] = useState({ award: '', points: '', notes: '', tags: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/rewards/${params.rewardId}`)
      .then( res => setReward(res.data))
      .catch( err => console.log(err))
  }, [])

  const addRewardActivity = ( title ) => {
    const activity = {activity_type: 'Reward', title: title}
    addActivity(activity) //need to run logic to see if they have enough points
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
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.rewardId} {award}</h1>
          <h3>Points: {points}</h3>
          <h5>Notes: {notes}
          </h5>
          <h5>Tags: {tags}</h5>
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteReward(id)}
          >
            Delete
          </Button>
          <Button 
            variant="success"
            onClick={() => addRewardActivity(award)}
          >
            Redeem
          </Button>
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

export default ConnectedActivityRewardShow;