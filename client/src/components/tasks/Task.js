import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
// import {ListGroup, Button} from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';
import {AuthConsumer} from '../../providers/AuthProvider';

const Task =({ user, id, title, complete, comment, diff_levels, tags, frequency, addActivity, updateTask, updatePoints }) =>{

  const plusActivity = (title, diff_levels) => {
    const Activity = { activity_type: 'Task', title: title }
    
    addActivity(Activity)
    updateTask(id, { title, complete: true, comment, diff_levels, tags, frequency})
    let newpoints = user.points + levelValue(diff_levels)
    updatePoints(newpoints)
  }

  const levelValue = (diff_levels) => {
    if (diff_levels === 'Easy') {
      return user.easy
    } else if (diff_levels === 'Medium') {
      return user.medium
    } else {
      return user.difficult
    }

  }

  return(
    <>
    { !complete ? 
      <button 
        onClick={()=> plusActivity(title, diff_levels)}

      >+</button>
      : null
    }
      <Link to={`/tasks/${id}`}>
        <p>{title}</p>
      </Link>
    <br />
    </>
  )
}

const ConnectedTask = (props) => (
  <ActivityConsumer>
    { value => <Task {...props} {...value} /> }
  </ActivityConsumer>
)

const ConnectedTaskTask = (props) => (
  <TaskConsumer>
    { value => <ConnectedTask {...props} {...value} /> }
  </TaskConsumer>
)
const ConnectedAuthTask = (props) => (
  <AuthConsumer>
    { value => <ConnectedTaskTask {...props} {...value} /> }
  </AuthConsumer>
)



export default ConnectedAuthTask;