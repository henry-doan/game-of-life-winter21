import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';
// import M from "materialize-css/dist/js/materialize.min.js";
import Logo from '../../images/Logo.png';
import { GameNav, GameNavItemPrime, GameNavItemSecondary, NotificationIcon, NotificationItem, ImageItem, LinkImage } from "../../styles/shared";

const MainNavbar = ({ user, handleLogout, image}) => {
  const publicLinks = [
    <GameNavItemSecondary key={1} to="/register">
      Sign Up
    </GameNavItemSecondary>,
    <GameNavItemPrime to="/login" key={2}>
      Log In
    </GameNavItemPrime>
  ];

  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

  const privateLinks = [
    
    <NotificationItem to="/activities">
      <NotificationIcon>notifications_none</NotificationIcon>

    </NotificationItem>
    ,
    <LinkImage to="/profile">
        <ImageItem src={ user ? user.image : defaultImage} />
    </LinkImage>
    ,
    <NavItem key={7} onClick={() => handleLogout()}>
      Logout
    </NavItem>
  ];

  return (
    <>
      <GameNav
        alignLinks="right"
        brand={
          <Link to="/" className="brand-logo">
            <img 
              src={Logo}
              height="80px"
            />
          </Link>
        }
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
        { user ? privateLinks : publicLinks }
      </GameNav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedNavbar;