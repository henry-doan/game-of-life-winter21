import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import {ListGroup, Button} from 'react-bootstrap';
import { TaskConsumer } from '../../providers/TaskProvider';

const Task =({ id, title, complete, comment, diff_levels, tags, frequency, addActivity, updateTask }) =>{

  const plusActivity = (title) => {
    const Activity = { activity_type: 'Task', title: title }
    
    addActivity(Activity)
    updateTask(id, { title, complete: true, comment, diff_levels, tags, frequency})
    // will also increase the points
  }



  return(
    <>
    { !complete ? 
      <Button 
        variant='warning'
        onClick={()=> plusActivity(title)}

      >+</Button>
      : null
    }
      <Link to={`/tasks/${id}`}>
        <p>{title}</p>
      </Link>
    <br />
    </>
  )
}

const ConnectedActivity = (props) => (
  <ActivityConsumer>
    { value => <Task {...props} {...value} /> }
  </ActivityConsumer>
)

const ConnectedTask = (props) => (
  <TaskConsumer>
    { value => <ConnectedActivity {...props} {...value} /> }
  </TaskConsumer>
)

export default ConnectedTask;