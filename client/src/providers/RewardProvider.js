import React, { useState } from 'react';
import axios from 'axios';

export const RewardContext = React.createContext();
export const RewardConsumer = RewardContext.Consumer;

const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState([])

  const getAllRewards = () => {
    axios.get('/api/rewards')
      .then( res => setRewards(res.data))
      .catch( err => console.log(err))
  }


  return(
    <RewardContext.Provider value={{
      rewards,
      getAllRewards: getAllRewards,
    }}>
      { children }
    </RewardContext.Provider>
  )
}

export default RewardProvider;