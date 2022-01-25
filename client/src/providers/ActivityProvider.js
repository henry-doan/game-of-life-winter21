import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const ActivityContext = React.createContext();
export const ActivityConsumer = ActivityContext.Consumer;

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([])

  // const navigate = useNavigate()

  const getAllActivities = () => {
    axios.get('/api/activities')
      .then( res => setActivities(res.data))
      .catch( err => console.log(err))
  }

  const addActivity = (activity) => {
    axios.post('/api/activities', { activity })
      .then( res => setActivities([res.data, ...activities]))
      .catch( err => console.log(err))
  }

  // const updateActivity = (id, activity) => {
  //   axios.put(`/api/activities/${id}`, { activity })
  //     .then( res => {
  //       const newUpdatedActivities = activities.map( r => {
  //         if (r.id === id) {
  //           return res.data
  //         } 
  //           return r
  //       })
  //       setActivities(newUpdatedActivities)
  //       navigate('/activities')
  //     })
  //     .catch( err => console.log(err))
  // }

  // const deleteActivity = (id) => {
  //   axios.delete(`/api/activities/${id}`)
  //     .then( res => {
  //       setActivities(activities.filter( r => r.id !== id))
  //       alert(res.data.message)
  //       navigate('/activities')
  //     })
  //     .catch( err => console.log(err))
  // }

  return(
    <ActivityContext.Provider value={{
      activities,
      getAllActivities: getAllActivities,
      addActivity: addActivity,
      // updateActivity: updateActivity,
      // deleteActivity: deleteActivity,
    }}>
      { children }
    </ActivityContext.Provider>
  )
}

export default ActivityProvider;