import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', name: '', image: '' })

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
        <container>
          <row>
            <col>
              <div className="mb-3" controlId="formBasicEmail">
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
            </col>
          </row>
          <row>
            <col>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                />
              </div>
            </col>
            
            <col>
              <div className="mb-3">
                <label>Profile Image</label>
                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={(e) => setUser({ ...user, image: e.target.value })}
                  required
                />
              </div>
            </col>
          </row>
          <row>
            <col>
              <div className="mb-3" controlId="formBasicPassword">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
              </div>
            </col>
            <col>
              <div className="mb-3" controlId="formBasicPassword">
                <label>Password Confirmation</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  value={user.passwordConfirmation}
                  onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                  required
                />
              </div>
            </col>
          </row>
        </container>
        <button variant="primary" type="submit">
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