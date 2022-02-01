import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    if (user) {
      return (
        <>
        
        <NavItem href="/dashboard">
              Dashboard
            </NavItem>
        <NavItem href="/profile">
              Profile
            </NavItem>
        <NavItem href="/activities">
              Activities
            </NavItem>
        <NavItem href="/habits">
              Habits
            </NavItem>
        <NavItem href="/tasks">
              Tasks
            </NavItem>
        <NavItem href="/rewards">
              Rewards
            </NavItem>
        <p>Points: {user.points}</p>
        <NavItem onClick={() => handleLogout()}>
            Logout
          </NavItem>
          
        </>
      )
    } else {
      return (
        <>
        <Button> 
          <Link to="/login">
            Login
          </Link>
        </Button>
        <Button> 
          <Link to="/register">
            Register 
          </Link>
        </Button>
        </>
      )
    }
  }

  return (
    <>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="/">Logo</a>}
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
          <NavItem href="/">
               { rightNavItems() }
              </NavItem>
        </Navbar>
      
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedNavbar;