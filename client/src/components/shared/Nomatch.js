import { Link } from 'react-router-dom';
import { MainContainer } from '../../styles/shared';

const Nomatch = () => (
  <MainContainer>
    <h1>Error 404 - page not found</h1>
    <Link to="/">
      Go Back Home
    </Link>
  </MainContainer>
)

export default Nomatch;