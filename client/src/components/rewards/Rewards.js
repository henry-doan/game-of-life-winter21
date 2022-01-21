import { useEffect, useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardList from './RewardList';
import { Button } from 'react-bootstrap';
import RewardForm from './RewardForm';

const Rewards = ({ rewards, getAllRewards, addReward }) => {
  const [adding, setAdding] = useState(false)

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

const ConnectedReward = (props) => (
  <RewardConsumer>
    { value => <Rewards {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedReward;