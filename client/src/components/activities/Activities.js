// import HabitShow from '../habits/HabitShow';
// import TaskShow from '../tasks/TaskShow';
// import RewardShow from '../rewards/RewardShow';
import { useState, useEffect } from 'react';
import {ActivityConsumer} from '../../providers/ActivityProvider';
import { MainContainer } from '../../styles/shared';
import {Table} from 'react-materialize';

const Activities = ({ activities, created_at, id, getAllActivities }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllActivities()
  }, [])



  return (
    <MainContainer>
      <h1>All Activities Completed:</h1>
      <Table>
        <thead>
          <tr>
            <th data-field="activity_type">
              Activity Type 
            </th>
            <th data-field="title">
              Description
            </th>
            <th data-field="created_at">
              Completed At
            </th>
          </tr>
        </thead>
        
        {
          activities.map( a =>
            <tbody>
              <tr>
              <td> 
              {a.activity_type}
              </td>
              <td>
                {a.title}
                </td>
              <td>
                {a.created_at} 
              </td>
            </tr>
            </tbody>
            )
        }
       </Table>
      
      {/* <div>
        {
          activities.map( a =>
            <div> 
              {a.activity_type} {a.title} {a.created_at} 
            </div>
            )
        }
      </div> */}

      
    </MainContainer>

  )
}

const ConnectedActivities = (props) => (
  <ActivityConsumer>
    { value => <Activities {...props} {...value} />}
  </ActivityConsumer>
)

export default ConnectedActivities;