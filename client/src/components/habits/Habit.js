import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';
import { HabitWrapper, HabitMinusBtn, HabitPlusBtn, HabitContent, MainContainer, } from '../../styles/shared';

const Habit =({ id, title, notes, add_option, sub_option, addActivity, dif_level, user, updatePoints }) =>{

  const plusActivity = (title, dif_level) => {
    const Activity = { activity_type: 'Habit', title: title }
    
    addActivity(Activity)
    let newpoints = user.points + levelValue(dif_level)
    updatePoints(newpoints)
  }

  const subActivity = (title, dif_level) => {
    const Activity = { activity_type: 'Habit', title: title }
    
    addActivity(Activity)
    let newpoints = user.points - levelValue(dif_level)
    updatePoints(newpoints)
  }

  const levelValue = (dif_level) => {
    if (dif_level === 'Easy') {
      return user.easy
    } else if (dif_level === 'Medium') {
      return user.medium
    } else {
      return user.difficult
    }

  }

  return(
    <HabitWrapper>
    { sub_option ? 
      <HabitMinusBtn 
        onClick={()=> subActivity(title, dif_level)}
      ></HabitMinusBtn>
      : null
    }
      <HabitContent style={{textDecoration: "none", color: "black"}} to={`/habits/${id}`}>
        <p style={{fontWeight: "bold", color: "#4a4a4a", marginTop: "25px"}}>{title}</p>
      </HabitContent>
      { add_option ? 
      <HabitPlusBtn
        onClick={()=> plusActivity(title, dif_level)}
      ></HabitPlusBtn>
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
const ConnectedAuthHabit = (props) => (
  <AuthConsumer>
    { value=> <ConnectedHabit {...props} {...value} /> }
  </AuthConsumer>
)


export default ConnectedAuthHabit;