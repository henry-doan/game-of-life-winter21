import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TaskContext = React.createContext();
export const TaskConsumer = TaskContext.Consumer;

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const navigate = useNavigate()

  const getAllTasks = () => {
    axios.get('/api/tasks')
      .then( res => setTasks(res.data))
      .catch( err => console.log(err))
  }

  const addTask = (task) => {
    axios.post('/api/tasks', { task })
      .then( res => setTasks([...tasks, res.data]))
      .catch( err => console.log(err))
  }

  const updateTask = (id, task) => {
    axios.put(`/api/tasks/${id}`, { task })
      .then( res => {
        const newUpdatedTasks = tasks.map( r => {
          if (r.id === id) {
            return res.data
          } 
            return r
        })
        setTasks(newUpdatedTasks)
        navigate('/tasks')
      })
      .catch( err => console.log(err))
  }

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`)
      .then( res => {
        setTasks(tasks.filter( r => r.id !== id))
        alert(res.data.message)
        navigate('/tasks')
      })
      .catch( err => console.log(err))
  }

  return(
    <TaskContext.Provider value={{
      tasks,
      getAllTasks: getAllTasks,
      addTask: addTask,
      updateTask: updateTask,
      deleteTask: deleteTask,
    }}>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;