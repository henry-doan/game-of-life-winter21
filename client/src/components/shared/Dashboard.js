import HabitList from '../habits/HabitList';
import TaskList from '../tasks/TaskList';
import RewardList from '../rewards/RewardList';
import Home from './Home';
import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect } from 'react';
import { HabitConsumer,  } from '../../providers/HabitProvider';
import { TaskConsumer } from '../../providers/TaskProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
// import { Col, Row, Container } from 'react-bootstrap';

const Dashboard = ({ user, habits, tasks, rewards, getAllHabits, getAllTasks, getAllRewards}) => {

  useEffect( () => {
    getAllTasks()
    getAllRewards()
    getAllHabits()
  }, [])                 

  if (user) { 
    return (
    <>
      <h1>Dashboard</h1>
    
              <h3>Habits:</h3>
              <br />
              <HabitList habits={habits}/>
           
              <h3>Tasks: </h3>
              <br />
              <TaskList tasks={tasks}/>
            
              <h3>Rewards:</h3>
              <br />
              <RewardList rewards={rewards}/>
            
    </>

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