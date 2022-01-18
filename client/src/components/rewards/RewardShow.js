import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';


const RewardShow = ({ updateReward, deleteReward }) => {
  const params = useParams();
  const [reward, setReward] = useState({ award: '', points: '', image: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/rewards/${params.rewardId}`)
      .then( res => setReward(res.data))
      .catch( err => console.log(err))
  }, [])

  const { award, points, image, id } = reward
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
          <h5>Image: {image}
          </h5>
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

export default ConnectedRewardShow;