// import { Card } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import { Form, Row, Col, Image, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';


const Profile = ({ name, email, image, updateUser }) => {
  const [editing, setEditing] = useState(false)
  // const [formVals, setFormValue] = useState({ name: '', email: '', image: '' })
  const [user, setUser] = useState({ name: '', image: '', email: '' })

  useEffect( () => {
    const { name, email, image } = user
    setUser({ name, email, image })
  }, [])

const profileView = () => {
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

  return (
    <>
      <Col md="4">
        <Image src={ image || defaultImage } />
      </Col>
      <Col md="8">
        <h1>{name}</h1>
        <h1>{email}</h1>
      </Col>
    </>
  )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user)
    setEditing(false)
  }

  const editView = () => {
    return(
      <Form onSubmit={handleSubmit}>
        <Col md="4">
        <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control 
              type="text" 
              name="image"
              value={user.image}
              required
              onChange={(e) => setUser({...user, image: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Col md="8">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name"
              value={user.name}
              required
              onChange={(e) => setUser({...user, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={user.email}
              required
              onChange={(e) => setUser({...user, email: e.target.value })}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Col>
      </Form>
    )
    }
  
  return (
    <>
    <Container>
        <h1>Profile</h1>
        <hr />
        <Row>
          { editing ? editView() : profileView() }
          <Col>
            <Button onClick={() => setEditing(!editing)}>
              { editing ? 'cancel' : 'edit' }
            </Button>
          </Col>
        </Row>
      </Container>
      </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedProfile;