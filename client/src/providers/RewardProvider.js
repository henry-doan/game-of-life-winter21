import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RewardContext = React.createContext();
export const RewardConsumer = RewardContext.Consumer;

const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState([])

  const navigate = useNavigate()

  const getAllRewards = () => {
    axios.get('/api/rewards')
      .then( res => setRewards(res.data))
      .catch( err => console.log(err))
  }

  const addReward = (reward) => {
    axios.post('/api/rewards', { reward })
      .then( res => setRewards([...rewards, res.data]))
      .catch( err => console.log(err))
  }

  const updateReward = (id, reward) => {
    axios.put(`/api/rewards/${id}`, { reward })
      .then( res => {
        const newUpdatedRewards = rewards.map( r => {
          if (r.id === id) {
            return res.data
          } 
            return r
        })
        setRewards(newUpdatedRewards)
        navigate('/dashboard')
      })
      .catch( err => console.log(err))
  }

  const deleteReward = (id) => {
    axios.delete(`/api/rewards/${id}`)
      .then( res => {
        setRewards(rewards.filter( r => r.id !== id))
        alert(res.data.message)
        navigate('/rewards')
      })
      .catch( err => console.log(err))
  }

  return(
    <RewardContext.Provider value={{
      rewards,
      getAllRewards: getAllRewards,
      addReward: addReward,
      updateReward: updateReward,
      deleteReward: deleteReward,
    }}>
      { children }
    </RewardContext.Provider>
  )
}

export default RewardProvider;