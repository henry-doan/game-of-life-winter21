// import {ActivityConsumer} from '../../providers/ActivityProvider';
// import {AuthConsumer} from '../../providers/AuthProvider';
// import {Link} from 'react-router-dom';
// import { useReducer } from 'react';
// // import { Button } from 'react-bootstrap';
// import {RewardConsumer} from '../../providers/RewardProvider';
// import { RewardWrapper, RewardContent, RewardPlusBtn, RewardItem} from '../../styles/reward';
// import GoldCoin from '../../images/GoldCoin.png';
// import { MainContainer } from '../../styles/shared';

// const Reward = ({ user, award, id, title, points, addActivity, updatePoints, }) => {

//   const addRewardActivity = ( title, points ) => {
//     const Activity = { activity_type: 'Reward', title: title }

//     addActivity(Activity)
//     let newpoints = 0     
//     if (user.points >= points) {
//       newpoints = user.points - points
//       updatePoints(newpoints)
//       alert('Redeemed!');
//     } else if (user.points < points) {
//       alert('Not enough points.')
//     } 

//   }

//   return (
//     <>
//     <RewardWrapper>
//     <RewardContent to={`/rewards/${id}`}>
//       {award}
//     </RewardContent>

//     <RewardPlusBtn 
//       variant="success"
//       onClick={() => addRewardActivity(award, points)}
//     >
//       <RewardItem>
//             <img 
//               src={GoldCoin}
//               height="60px"
//             />{points}
//       </RewardItem>
//     </RewardPlusBtn>
 
//     </RewardWrapper>
//     </>
//   )
// }


// const ConnectedReward = (props) => (
//   <ActivityConsumer>
//     { value => <Reward {...props} {...value} /> }
//   </ActivityConsumer>
// )

// const ConnectedRewardReward = (props) => (
//   <RewardConsumer>
//     { value => <ConnectedReward {...props} {...value} /> }
//   </RewardConsumer>
// )

// const ConnectedAuthReward = (props) => (
//   <AuthConsumer>
//     { value => <ConnectedRewardReward {...props} {...value} /> }
//   </AuthConsumer>
// )


// export default ConnectedAuthReward;

import {ActivityConsumer} from '../../providers/ActivityProvider';
import {AuthConsumer} from '../../providers/AuthProvider';
import {Link} from 'react-router-dom';
import { useReducer } from 'react';
import GoldCoin from '../../images/GoldCoin.png';
import {RewardConsumer} from '../../providers/RewardProvider';
import { RewardContent, RewardRedeemBtn, RewardWrapper, RewardItem } from '../../styles/shared';

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
    <RewardWrapper>
    <RewardContent style={{textDecoration: "none", color: "black"}} to={`/rewards/${id}`}>
      <p style={{fontWeight: "bold", color: "#4a4a4a", marginTop: "25px"}}>{award}</p>
    </RewardContent>
      <br /> 
        <RewardRedeemBtn 
          onClick={() => addRewardActivity(award, points)}>
            <RewardItem>
              <img 
                src={GoldCoin}
                height="50px"
              />{points}
            </RewardItem>
        </RewardRedeemBtn>
      <br />
    </RewardWrapper>
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