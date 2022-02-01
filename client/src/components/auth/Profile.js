// import { Card } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
// import Moment from 'react-moment';
import { useEffect, useState } from 'react';
// import { form, row, col, Image, Container, button } from 'react-bootstrap';
import { useParams } from 'react-router';


const Profile = ({ name, email, image, id, updateUser }) => {
  const [editing, setEditing] = useState(false)
  // const [formVals, setformValue] = useState({ name: '', email: '', image: '' })
  const [user, setUser] = useState({ name: '', image: '', email: '' })

  useEffect( () => {
    // const { name, email, image } = user
    setUser({ name, email, image })
  }, [])

const profileView = () => {
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    <>
      <col md="4">
        <image src={ image || defaultImage } />
      </col>
      <col md="8">
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
      </col>
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
        <col md="4">
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
        </col>
        <col md="8">
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
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={user.email}
              required
              onChange={(e) => setUser({...user, email: e.target.value })}
            />
          </div>
          <button type="submit">Update</button>
        </col>
      </form>
    )
    }
  
  return (
    <>
    <container>
        <h1>Profile</h1>
        <br />
        <row>
          { editing ? editView() : profileView() }
          <col>
            <button onClick={() => setEditing(!editing)}>
              { editing ? 'cancel' : 'edit' }
            </button>
          </col>
        </row>
      </container>
      </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} updateUser={value.updateUser} />}
  </AuthConsumer>
)

export default ConnectedProfile;