import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
// import { Container } from 'react-bootstrap';
import M from 'materialize-css';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';
import RewardShow from './components/rewards/RewardShow';
import Rewards from './components/rewards/Rewards';
import Tasks from './components/tasks/Tasks';
import TaskShow from './components/tasks/TaskShow';
import Habits from './components/habits/Habits';
import HabitShow from './components/habits/HabitShow';
import Dashboard from './components/shared/Dashboard';
import Activities from './components/activities/Activities';
import ActivityShow from './components/activities/ActivityShow';
import Footer from './components/shared/Footer';
import About from './components/shared/About';
import Sidebar from './components/shared/Sidebar';

const App = () => (
  <>
    <MainNavbar />
    <Sidebar />
    <FetchUser>
      {/* <Container> */}
      {/* <div class="container"> */}
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/rewards' element={<Rewards />} />
              <Route path='/rewards/:rewardId' element={<RewardShow />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/tasks/:taskId' element={<TaskShow />} />
              <Route path='/habits' element={<Habits />} />
              <Route path='/habits/:habitId' element={<HabitShow />} />
              <Route path='/activities' element={<Activities />} />
              <Route path='/activities/:activityId' element={<ActivityShow />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      {/* </Container> */}
      {/* </div> */}
    </FetchUser>
    <Footer />
  </>
)

export default App;