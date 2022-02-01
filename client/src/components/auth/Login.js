import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
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
            
       
        <button variant="primary" type="submit">
          Login
        </button>
      </form>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedLogin;