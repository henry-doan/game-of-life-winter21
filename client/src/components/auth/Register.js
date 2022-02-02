import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', name: '', image: 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '', passwordConfirmation: '', name: '', image: '' })
    } else {
      alert('Password do not match')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
              <div>
                <label>Email address</label>
                <input 
                  type="email"
                  autoFocus
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>
          
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                />
              </div>
           
              <div>
                <label>Profile Image</label>
                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={(e) => setUser({ ...user, image: e.target.value })}
                  required
                />
              </div>
            
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
              </div>
            
              <div>
                <label>Password Confirmation</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  value={user.passwordConfirmation}
                  onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                  required
                />
              </div>
           
              <button>
                Register
              </button>
            </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedRegister;