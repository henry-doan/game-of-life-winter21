
import { useState, useEffect } from 'react';
import {ActivityConsumer} from '../../providers/ActivityProvider';
import { MainContainer } from '../../styles/shared';
import {Table} from 'react-materialize';
import Moment from 'react-moment';

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
              <Moment format='MMMM Do YYYY, h:mm a'>
              {a.created_at} 
              </Moment>
              </td>
            </tr>
            </tbody>
            )
        }
       </Table>

      
    </MainContainer>

  )
}

const ConnectedActivities = (props) => (
  <ActivityConsumer>
    { value => <Activities {...props} {...value} />}
  </ActivityConsumer>
)

export default ConnectedActivities;