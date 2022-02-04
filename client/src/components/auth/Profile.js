// import { Card } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize';
import { useParams } from 'react-router';
import { MainContainer, EditButton } from '../../styles/shared';


const Profile = ({ name, email, image, password, id, note, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [user, setUser] = useState({ name: '', image: '', email: '', note: '', })

  useEffect( () => {
    setUser({ name, email, image, note })
  }, [])

const profileView = () => {
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    <>
      <Row>
        <Col
          m={6}
          s={12}
        >
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={user ? user.image : defaultImage} reveal waves="light" style={{height: "400px", objectPosition: "center"}}/>}
        reveal={
          <>
        <h5 style={{color: "blue"}}>"{note}"</h5>
        <br />
        <h5>User Info:</h5>
        <p>Email: {email}</p>
        </>
        }
        
        revealIcon={<Icon>more_vert</Icon>}
        title={name}
      >
      <p>
                <a href="/activities">
                  Activities Completed
                </a>
              </p>
            </Card>
          </Col>
        </Row>
    </>
   
  )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(id, user)
    setEditing(false)
  }

  const editView = () => {
    return(
      
      <form onSubmit={handleSubmit}>
        
        <div>
            <label>Image</label>
            <input 
              type="text" 
              name="image"
              value={user.image}
              required
              onChange={(e) => setUser({...user, image: e.target.value })}
            />
          </div>


          <div>
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              value={user.name}
              required
              onChange={(e) => setUser({...user, name: e.target.value })}
            />
          </div>

          <div>
            <label>Description</label>
            <input 
              type="text" 
              name="note"
              value={user.note}
              onChange={(e) => setUser({...user, note: e.target.value })}
            />
          </div>

          <div>
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={user.email}
              required
              onChange={(e) => setUser({...user, email: e.target.value })}
            />
          </div>
          <EditButton type="submit">Update</EditButton>
      </form>
      
    )
    }
  
  return (
    <MainContainer>
    <div>
        <h1>Profile</h1>
        <br />
        
          { editing ? editView() : profileView() }
          
            <EditButton onClick={() => setEditing(!editing)}>
              { editing ? 'cancel' : 'edit' }
            </EditButton>
          
      </div>
      </MainContainer>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} updateUser={value.updateUser} />}
  </AuthConsumer>
)

export default ConnectedProfile;