import Dashboard from './Dashboard';
import hero from '../../images/hero.jpg';
import { LoginContainer, HomeHeader, ImageText } from '../../styles/shared';
import Login from '../auth/Login';

const Home = () => {
  return (
    <>
    <HomeHeader>
    <img alt="hero" src={hero} width="100%" style={{filter: 'brightness(50%)'}} />
      <ImageText>
        <h3>
          Level up by playing...
          The Game of Life
        </h3>
        <h5>
          When you win this game, we all win.
        </h5>
       </ImageText> 
       <LoginContainer>
        <p>
          Login Here
        </p>
        <h4>
          Login to the Game of Life
        </h4>    
        <Login />
      </LoginContainer>
    
      
    </HomeHeader>
    </>
  )
}


export default Home;