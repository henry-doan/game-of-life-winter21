import { useEffect, useState } from 'react';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitList from '../habits/HabitList';
import { Button } from 'react-bootstrap';
import HabitForm from '../habits/HabitForm';

const ActivityShow = ({ habits, tasks, title, activity_type, created_at, id, getAllActivities }) => {
 
  useEffect = () => {
    getAllActivities ()
  }
  return (
    <>
      <h1>All Activities Completed</h1>
          
    </>
  )
}


export default ActivityShow;









