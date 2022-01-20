// import HabitShow from '../habits/HabitShow';
// import TaskShow from '../tasks/TaskShow';
// import RewardShow from '../rewards/RewardShow';
import { useState, useEffect } from 'react';
import {ActivityConsumer} from '../../providers/ActivityProvider';
import {ListGroup} from 'react-bootstrap';

const Activities = ({ activities, created_at, id, getAllActivities }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllActivities()
  }, [])


  return (
    <>
      <ListGroup>
        {
          activities.map( a =>
            <ListGroup.Item> 
              {a.activity_type} {a.title} {a.created_at} 
            </ListGroup.Item>
            )
        }
      </ListGroup>
    </>

  )
}

const ConnectedActivities = (props) => (
  <ActivityConsumer>
    { value => <Activities {...props} {...value} />}
  </ActivityConsumer>
)

export default ConnectedActivities;