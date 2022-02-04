import HabitList from '../habits/HabitList';
import TaskList from '../tasks/TaskList';
import RewardList from '../rewards/RewardList';
import Home from './Home';
import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect } from 'react';
import { HabitConsumer  } from '../../providers/HabitProvider';
import { TaskConsumer } from '../../providers/TaskProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
import { Col, Row, Container } from 'react-materialize';
import { MainContainer } from '../../styles/shared';

const Dashboard = ({ user, habits, tasks, rewards, getAllHabits, getAllTasks, getAllRewards}) => {

  useEffect( () => {
    getAllTasks()
    getAllRewards()
    getAllHabits()
  }, [])                 

  if (user) { 
    return (
    <MainContainer>
      <h1 style={{fontSize: "30px", fontWeight: "800", textAlign: "left", paddingLeft: "390px"}}>Dashboard</h1>
          <Row>
            <Col>
            <br />
              <HabitList habits={habits}/>
            </Col>
            <Col>
            <br />
              <TaskList tasks={tasks}/>
            </Col>
            <Col>
            <br />
              <RewardList rewards={rewards}/>
            </Col>
          </Row>
    </MainContainer>

  )
    } else {
      return (
        <>
        <Home />
        </>
      )
    }
}
const ConnectedAuthDashboard = (props) => (
  <AuthConsumer>
  { value => <Dashboard { ...props } { ...value } />}
  </AuthConsumer>
)
const ConnectedHabitDashboard = (props) => (
  <HabitConsumer>
  { value => <ConnectedAuthDashboard { ...props } { ...value } />}
  </HabitConsumer>
)
const ConnectedTaskDashboard = (props) => (
    <TaskConsumer>
    { value => <ConnectedHabitDashboard { ...props } { ...value } />}
    </TaskConsumer>
)
const ConnectedRewardDashboard = (props) => (
  <RewardConsumer>
  { value => <ConnectedTaskDashboard { ...props } { ...value } />}
  </RewardConsumer>
)

export default ConnectedRewardDashboard;