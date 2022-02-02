import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import {ListGroup, Button} from 'react-materialize';
import { HabitWrapper, HabitMinusBtn, HabitPlusBtn, HabitContent } from '../../styles/habit';

const Habit =({ id, title, add_option, sub_option, addActivity }) =>{

  const plusActivity = (title) => {
    const Activity = { activity_type: 'Habit', title: title }
    
    addActivity(Activity)
    // will also increase the points
  }

  const subActivity = (title) => {
    const Activity = { activity_type: 'Habit', title: title }
    
    addActivity(Activity)
    // will also increase the points
  }

  return(
    <HabitWrapper>
    { sub_option ? 
      <HabitMinusBtn 
        onClick={()=> subActivity(title)}
      >-</HabitMinusBtn>
      : null
    }
      <HabitContent to={`/habits/${id}`}>
        <p>{title}</p>
      </HabitContent>
      { add_option ? 
      <HabitPlusBtn 
        onClick={()=> plusActivity(title)}
      >+</HabitPlusBtn>
      : null
    }
    <br />
    </HabitWrapper>
  )
}

const ConnectedHabit = (props) => (
  <ActivityConsumer>
    { value=> <Habit {...props} {...value} /> }
  </ActivityConsumer>
)

export default ConnectedHabit;