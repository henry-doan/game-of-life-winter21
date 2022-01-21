import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import {ListGroup, Button} from 'react-bootstrap';


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
    <>
    { sub_option ? 
      <Button 
        variant='danger'
        onClick={()=> subActivity(title)}
      >-</Button>
      : null
    }
      <Link to={`/habits/${id}`}>
        <p>{title}</p>
      </Link>
      { add_option ? 
      <Button 
        variant='success'
        onClick={()=> plusActivity(title)}
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

export default ConnectedHabit;