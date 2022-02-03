import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
import { AuthConsumer } from '../../providers/AuthProvider';
// import Profile from '../../auth/Profile';

const Sidebar = ({user, name, email, image, id, handleLogout}) => {

  if (user) { 
  return (
    <>
<div>
  <SideNav
    id="SideNav-41"
    options={{
      draggable: true
    }}
    fixed
    // style={{ zIndex: -1}}
  
  >
    <SideNavItem
      user={{image: user ? user.image : ''}}
      userView
    />
    <SideNavItem
      href="/profile"
      icon={<Icon>cloud</Icon>}
    >
      User: { user ? user.name : ' ' }
    </SideNavItem>
    <SideNavItem>
      {user ? user.note : ' '}  
    </SideNavItem>
    <SideNavItem>
    <Icon> grade </Icon>
      Points: {user ? user.points : 0 }
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem href="/tasks">
      <Icon> bubble_chart </Icon>
      Tasks
    </SideNavItem>
    {/* <SideNavItem href="/">
      <Icon> textsms </Icon>
      Challenges
    </SideNavItem> */}
    <SideNavItem href="/dashboard">
      <Icon> check_box </Icon>
      Dashboard
    </SideNavItem>
    {/* <SideNavItem href="/">
      <Icon>date_range</Icon>
      Calendar
    </SideNavItem> */}
    <SideNavItem href="/activities">
      <Icon>access_time</Icon>
      Activity
    </SideNavItem>
    <SideNavItem href="/profile">
      <Icon> settings </Icon>
      Profile Settings
    </SideNavItem>
    <SideNavItem onClick={() => handleLogout()}>
      <Icon> eject </Icon>
      Log Out
    </SideNavItem>
  </SideNav>
</div>
  </>
  )
  } else {
    return null
  }

  }

  


const ConnectedSidebar = (props) => (
  <AuthConsumer>
    { value => <Sidebar { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedSidebar;