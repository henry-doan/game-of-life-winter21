import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ChecklistContext = React.createContext();
export const ChecklistConsumer = ChecklistContext.Consumer;

const ChecklistProvider = ({ children }) => {
  const [checklists, setChecklists] = useState([])

  const navigate = useNavigate()

  const getAllChecklists = (taskId ) => {
    axios.get(`/api/tasks/${taskId}/checklists`)
      .then( res => setChecklists(res.data))
      .catch( err => console.log(err))
  }

  const addChecklist = (taskId, checklist) => {
    axios.post(`/api/tasks/${taskId}/checklists`, { checklist })
      .then( res => setChecklists([...checklists, res.data]))
      .catch( err => console.log(err))
  }

  const updateChecklist = (taskId, id, checklist) => {
    axios.put(`/api/tasks/${taskId}/checklists/${id}`, { checklist })
      .then( res => {
        const newUpdatedChecklists = checklists.map( c => {
          if (c.id === id) {
            return res.data
          } 
            return c
        })
        setChecklists(newUpdatedChecklists)
        navigate(`/tasks`)
      })
      .catch( err => console.log(err))
  }

  const deleteChecklist = (taskId, id) => {
    axios.delete(`/api/tasks/${taskId}/checklists/${id}`)
      .then( res => {
        setChecklists(checklists.filter( r => r.id !== id))
        alert(res.data.message)
        navigate(`/tasks/${taskId}/checklists`)
      })
      .catch( err => console.log(err))
  }

  return(
    <ChecklistContext.Provider value={{
      checklists,
      getAllChecklists: getAllChecklists,
      addChecklist: addChecklist,
      updateChecklist: updateChecklist,
      deleteChecklist: deleteChecklist,
    }}>
      { children }
    </ChecklistContext.Provider>
  )
}

export default ChecklistProvider;