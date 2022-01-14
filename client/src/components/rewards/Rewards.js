import { useEffect, useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardList from './RewardList';
import { Button } from 'react-bootstrap';
import RewardForm from './RewardForm';
import { useParams } from 'react-router-dom';

const Rewards = ({ rewards, user, getAllRewards, addReward }) => {
  const [adding, setAdding] = useState(false)

  // const params = useParams()

  useEffect( () => {
    getAllRewards()
  }, [])

  return (
    <>
      <h1>All Rewards</h1>
      { adding ?
          <>
            <RewardForm addReward={addReward} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <RewardList rewards={rewards} />
    </>
  )
}

const ConnectedRewards = (props) => (
  <RewardConsumer>
    { value => <Rewards {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedRewards;
