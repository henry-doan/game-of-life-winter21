import { useEffect, useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';

const Rewards = ({ getAllRewards }) => {
  
  // useEffect( () => {
  //   getAllRewards()
  // }, [])

  return (
    <>
    <h1>All Rewards</h1>
    </>

  )
}

const ConnectedReward = (props) => (
  <RewardConsumer>
    { value => <Rewards {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedReward;
