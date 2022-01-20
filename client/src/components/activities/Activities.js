import HabitShow from '../habits/HabitShow';
import TaskShow from '../tasks/TaskShow';
import RewardShow from '../rewards/RewardShow';
import { useState, useEffect } from 'react';
import {ActivityConsumer} from '../../providers/ActivityProvider';

const Activities = ({ habits, tasks, created_at, id, getAllActivities }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllActivities()
  }, [])


  return (
    <>
     {/* <h3>activity_type: { habits.id ? 'Habit' : 'Task'}</h3>
     <h3>title: {tasks.title} : {habits.title}</h3>
     <h3>created_at: {created_at}</h3> */}

    </>

  )
}

const ConnectedActivities = (props) => (
  <ActivityConsumer>
    { value => <Activities {...props} {...value} />}
  </ActivityConsumer>
)

export default ConnectedActivities;