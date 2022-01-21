import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const HabitContext = React.createContext();
export const HabitConsumer = HabitContext.Consumer;

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([])

  const navigate = useNavigate()

  const getAllHabits = () => {
    axios.get('/api/habits')
      .then( res => setHabits(res.data))
      .catch( err => console.log(err))
  }

  const addHabit = (habit) => {
    axios.post('/api/habits', { habit })
      .then( res => setHabits([...habits, res.data]))
      .catch( err => console.log(err))
  }

  const updateHabit = (id, habit) => {
    axios.put(`/api/habits/${id}`, { habit })
      .then( res => {
        const newUpdatedHabits = habits.map( r => {
          if (r.id === id) {
            return res.data
          } 
            return r
        })
        setHabits(newUpdatedHabits)
        navigate('/habits')
      })
      .catch( err => console.log(err))
  }

  const deleteHabit = (id) => {
    axios.delete(`/api/habits/${id}`)
      .then( res => {
        setHabits(habits.filter( r => r.id !== id))
        alert(res.data.message)
        navigate('/habits')
      })
      .catch( err => console.log(err))
  }

  return(
    <HabitContext.Provider value={{
      habits,
      getAllHabits: getAllHabits,
      addHabit: addHabit,
      updateHabit: updateHabit,
      deleteHabit: deleteHabit,
    }}>
      { children }
    </HabitContext.Provider>
  )
}

export default HabitProvider