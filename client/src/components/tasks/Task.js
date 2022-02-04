import {ActivityConsumer} from '../../providers/ActivityProvider';
import {Link} from 'react-router-dom';
import { TaskConsumer } from '../../providers/TaskProvider';
import {AuthConsumer} from '../../providers/AuthProvider';
import { TaskContent, TaskCompleteBtn, TaskWrapper } from '../../styles/shared';

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
    <TaskWrapper>
    { !complete ? 
      <TaskCompleteBtn
        onClick={()=> plusActivity(title, diff_levels)}

      ></TaskCompleteBtn>
      : null
    }
        <TaskContent style={{textDecoration: "none", color: "black"}} to={`/tasks/${id}`}>
          <p style={{fontWeight: "bold", color: "#4a4a4a", marginTop: "25px"}}>{title}</p>
        </TaskContent>
      <br />
    </TaskWrapper>
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