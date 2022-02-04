// import { useEffect, useState } from 'react';
// import { RewardConsumer } from '../../providers/RewardProvider';
// import RewardList from './RewardList';
// // import { Button } from 'react-bootstrap';
// import RewardForm from './RewardForm';
// import { MainContainer } from '../../styles/shared';

// const Rewards = ({ rewards, getAllRewards, addReward }) => {
//   const [adding, setAdding] = useState(false)

//   useEffect( () => {
//     getAllRewards()
//   }, [])

//   return (
//     <MainContainer>
//       <h1>All Rewards</h1>
//       { adding ?
//           <>
//             <RewardForm addReward={addReward} />
//             <button onClick={() => setAdding(false)}>Cancel</button>
//           </>
//         :
//         <button onClick={() => setAdding(true)}>+</button>
//       }
//       <RewardList rewards={rewards} />
//     </MainContainer>
//   )
// }

// const ConnectedReward = (props) => (
//   <RewardConsumer>
//     { value => <Rewards {...props} {...value} />}
//   </RewardConsumer>
// )

// export default ConnectedReward;

import { useEffect, useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardList from './RewardList';
// import { Button } from 'react-bootstrap';
import RewardForm from './RewardForm';
import { MainContainer } from '../../styles/shared';

const Rewards = ({ rewards, getAllRewards, addReward }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllRewards()
  }, [])

  return (
    <MainContainer>
      <h1>All Rewards</h1>
      { adding ?
          <>
            <RewardForm addReward={addReward} />
            <button onClick={() => setAdding(false)}>Cancel</button>
          </>
        :
        <button onClick={() => setAdding(true)}>+</button>
      }
      <RewardList rewards={rewards} />
    </MainContainer>
  )
}

const ConnectedReward = (props) => (
  <RewardConsumer>
    { value => <Rewards {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedReward;