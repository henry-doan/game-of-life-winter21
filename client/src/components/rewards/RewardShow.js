import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import { ActivityConsumer } from '../../providers/ActivityProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Modal, Button, Row, Col, Card, Icon } from 'react-materialize';
import { MainContainer } from '../../styles/shared';

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
        <MainContainer>
          <Row>
            <Col
              m={6}
              s={12}
            >
              <Card
                actions={[
                  <a key="1" href="#">
                    <Modal
                      actions={[
                        <Button flat modal="close" node="button" waves="green">Cancel</Button>
                      ]}
                      bottomSheet={false}
                      fixedFooter={false}
                      header="Edit Reward"
                      id="Modal-10"
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
                      trigger={<Button node="button">Edit</Button>}
                    >
                      <RewardForm {...reward} updateReward={updateReward}/>  
                    </Modal>
                    </a>,
                  <a key="2" href="#">
                    <Button 
                      variant="danger"
                      onClick={() => deleteReward(id)}
                    >
                      Delete
                    </Button>            
                    </a>
                ]}
                // className="blue-grey darken-1"
                
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                // textClassName="white-text"
                title={award}
              >
              <h5>Points: {points}</h5>
              <h5>{notes}</h5>
              <h5>Tags: {tags}</h5>
              </Card>
            </Col>
          </Row>

          
          
      
    </MainContainer>
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