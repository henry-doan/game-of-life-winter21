import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';
import Feed from './components/shared/Feed';
import RewardShow from './components/rewards/RewardShow';
import Rewards from './components/rewards/Rewards'

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/rewards' element={<Rewards />} />
              {/* <Route path='/rewards/:rewardId' element={<RewardShow />} /> */}
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </Container>
    </FetchUser>
  </>
)

export default App;