import { Collection } from 'react-materialize';
import { Link } from 'react-router-dom';
import Reward from './Reward';
import { Button, Modal } from 'react-materialize';
import RewardForm from './RewardForm';
import { RewardConsumer } from '../../providers/RewardProvider';
import { RewardModal, RewardModalChild } from '../../styles/shared';
// import M from "materialize-css/dist/js/materialize.min.js";

const RewardList = ({ rewards, addReward }) => {
  return(
    <>
      <Collection>
        { rewards.map( r => 
         <Reward {...r} />
        )}
        <RewardModal
          actions={[
            <Button flat modal="close" node="button" waves="green">Cancel</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Edit Reward"
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
          trigger={<Button node="button">+</Button>}
        >
          
          <RewardForm addReward={addReward} />
        
        </RewardModal>
      </Collection>
    </>
  )
}

const ConnectedRewardList = (props) => (
  <RewardConsumer>
    { value => <RewardList {...props} {...value} />}
  </RewardConsumer>
)


export default ConnectedRewardList;