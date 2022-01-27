import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ChecklistItemContext = React.createContext();
export const ChecklistItemConsumer = ChecklistItemContext.Consumer;

const ChecklistItemProvider = ({ children }) => {
  const [checklistitems, setChecklistItems] = useState([])

  const navigate = useNavigate()

  const getAllChecklistItems = (checklistId ) => {
    axios.get(`/api/checklists/${checklistId}/checklistitems`)
      .then( res => setChecklistItems(res.data))
      .catch( err => console.log(err))
  }

  const addChecklistItem = (checklistId, checklistitem) => {
    axios.post(`/api/checklists/${checklistId}/checklistitems`, { checklistitem })
      .then( res => setChecklistItems([...checklistitems, res.data]))
      .catch( err => console.log(err))
  }

  const updateChecklistItem = (checklistId, id, checklistitem) => {
    axios.put(`/api/checklists/${checklistId}/checklistitems/${id}`, { checklistitem })
      .then( res => {
        const newUpdatedChecklistItems = checklistitems.map( c => {
          if (c.id === id) {
            return res.data
          } 
            return c
        })
        setChecklistItems(newUpdatedChecklistItems)
        navigate(`/tasks`)
      })
      .catch( err => console.log(err))
  }

  const deleteChecklistItem = (checklistId, id) => {
    axios.delete(`/api/checklists/${checklistId}/checklistitems/${id}`)
      .then( res => {
        setChecklistItems(checklistitems.filter( r => r.id !== id))
        alert(res.data.message)
        navigate(`/tasks`)
      })
      .catch( err => console.log(err))
  }

  return(
    <ChecklistItemContext.Provider value={{
      checklistitems,
      getAllChecklistItems: getAllChecklistItems,
      addChecklistItem: addChecklistItem,
      updateChecklistItem: updateChecklistItem,
      deleteChecklistItem: deleteChecklistItem,
    }}>
      { children }
    </ChecklistItemContext.Provider>
  )
}

export default ChecklistItemProvider;