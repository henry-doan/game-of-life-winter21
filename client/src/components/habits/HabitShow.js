import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { HabitConsumer } from '../../providers/HabitProvider';
import HabitForm from './HabitForm';
import { Modal, Button, Row, Col, Card, Icon} from 'react-materialize'
import { MainContainer, HabitModal, InputSlot } from '../../styles/shared';

const HabitShow = ({ updateHabit, deleteHabit }) => {
  const params = useParams();
  const [habit, setHabit] = useState({ title: '', notes: '', add_option: false, sub_option: false, dif_level: '', tags: '', frequency: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/habits/${params.habitId}`)
      .then( res => setHabit(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, notes, add_option, sub_option, dif_level, tags, frequency, id } = habit
  return (
    <MainContainer>
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card style={{ background: "#F8f8f8", borderRadius: "20px", width: "500px", height: "400px", margin: "10% 50% 50% 50%"}}
          actions={[
            <a key="1" href="#">
              <HabitModal
                actions={[
                  <Button flat modal="close" node="button" waves="green">Cancel</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Edit Habit"
                id="Modal-10"
                open={false}
                options={{
                  dismissible: true,
                  endingTop: '10%',
                  inDuration: 250,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  opacity: 0.5,
                  outDuration: 250,
                  preventScrolling: true,
                  startingTop: '4%'
                }}
                trigger={<Button style={{border: "1px #f1f1f1 solid", borderRadius: "2px", color: "black", background: "white", boxShadow: "none", width: "120px"}} node="button">Edit</Button>}
              >
                <HabitForm {...habit} updateHabit={updateHabit}/>  
              </HabitModal>
              </a>,
            <a key="2" href="#">
              <Button style={{ width: "120px", border: "1px #f1f1f1 solid", borderRadius: "2px", color: "black", background: "white", boxShadow: "none"}}
                variant="danger"
                onClick={() => deleteHabit(id)}
              >
                Delete
              </Button>            
              </a>
          ]}
          // className="blue-grey darken-1"
          
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          // textClassName="white-text"
          title={title}
        >
        <h5>{title}</h5>
        <h5>Tags: {tags}</h5>
        <h5>{notes}</h5>
        <h5>Difficulty {dif_level}</h5>
        </Card>
      </Col>
    </Row>

    
    

</MainContainer>
  )
}


const ConnectedHabitShow = (props) => (
  <HabitConsumer>
    { value => <HabitShow {...props} {...value} /> }
  </HabitConsumer>
)

export default ConnectedHabitShow;