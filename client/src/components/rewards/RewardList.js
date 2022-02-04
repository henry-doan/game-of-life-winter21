// import { Collection } from 'react-materialize';
// import { Link } from 'react-router-dom';
// import Reward from './Reward';
// import { Button, Modal } from 'react-materialize';
// import RewardForm from './RewardForm';
// import { RewardConsumer } from '../../providers/RewardProvider';
// import { RewardModal, RewardModalChild } from '../../styles/shared';
// // import M from "materialize-css/dist/js/materialize.min.js";

// const RewardList = ({ rewards, addReward }) => {
//   return(
//     <>
//       <Collection>
//         { rewards.map( r => 
//          <Reward {...r} />
//         )}
//         <RewardModal
//           actions={[
//             <Button flat modal="close" node="button" waves="green">Cancel</Button>
//           ]}
//           bottomSheet={false}
//           fixedFooter={false}
//           header="Edit Reward"
//           open={false}
//           options={{
//             dismissible: true,
//             endingTop: '10%',
//             inDuration: 250,
//             onCloseEnd: null,
//             onCloseStart: null,
//             onOpenEnd: null,
//             onOpenStart: null,
//             opacity: 0.5,
//             outDuration: 250,
//             preventScrolling: true,
//             startingTop: '4%'
//           }}
//           trigger={<Button node="button">+</Button>}
//         >
          
//           <RewardForm addReward={addReward} />
        
//         </RewardModal>
//       </Collection>
//     </>
//   )
// }

// const ConnectedRewardList = (props) => (
//   <RewardConsumer>
//     { value => <RewardList {...props} {...value} />}
//   </RewardConsumer>
// )


// export default ConnectedRewardList;

import { Link } from 'react-router-dom';
import Reward from './Reward';
import { Button, Modal } from 'react-materialize';
import RewardForm from './RewardForm';
import { RewardConsumer } from '../../providers/RewardProvider';
import { RewardModal, RewardContainer, RewardModalBtn, MainContainer } from '../../styles/shared';

const RewardList = ({ rewards, addReward }) => {
  return(
    <>
      <RewardContainer>
      <p style={{fontSize: "18px", margin: "-2px 0px 12px 0px", color: "grey", fontWeight: "bold"}}>Rewards</p>
        { rewards.map( r => 
            <Reward {...r} />
        )}
        
       </RewardContainer>
       <RewardModal
          actions={[
            <Button flat modal="close" node="button" waves="green">Cancel</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Add Reward"
          open={false}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          trigger={<RewardModalBtn node="button">+</RewardModalBtn>}
        >
          <RewardForm addReward={addReward} />

       </RewardModal>
    </>
  )
}

const ConnectedRewardList = (props) => (
  <RewardConsumer>
    { value => <RewardList {...props} {...value} />}
  </RewardConsumer>
)

export default ConnectedRewardList;