import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import {ListGroup, Button} from 'react-bootstrap';
import {AuthConsumer} from '../../providers/AuthProvider';

const Habit =({ id, title, add_option, sub_option, addActivity, dif_level, user, updatePoints }) =>{

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
    <>
    { sub_option ? 
      <Button 
        variant='danger'
        onClick={()=> subActivity(title, dif_level)}
      >-</Button>
      : null
    }
      <Link to={`/habits/${id}`}>
        <p>{title}</p>
      </Link>
      { add_option ? 
      <Button 
        variant='success'
        onClick={()=> plusActivity(title, dif_level)}
      >+</Button>
      : null
    }
    <br />
    </>
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