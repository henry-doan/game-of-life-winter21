import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import { MainContainer } from '../../styles/shared';
import Steph from '../../images/Steph.jpg';
import Chantel from '../../images/Chantel.JPG';
import Freddy from '../../images/Freddy.jpg';
import Chris from '../../images/Chris.jpg';

const About = () => (
  <MainContainer>
  <Row>
    <Col
      m={6}
      // s={12}
    >
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={Chantel} reveal waves="light" style={{height: "400px", width: "100%"}} />}
        reveal={<p>Chantel has focused mainly on raising her kids the last 7 years while doing freelance work as a graphic designer and WordPress developer. With her kids' growing independence, she also expanded her skillset by introducing backend development into the mix to become a well-rounded web developer.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Chantel Cooke"
      >
        <p>
          <a href="https://www.linkedin.com/in/chantelcooke/">
            LinkedIn
          </a>
        </p>
      </Card>
    </Col>
    <Col
        m={6}>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={Chris} reveal waves="light" style={{height: "400px", width: "100%"}}/>}
        reveal={<p>Christopher was a Walmart stocker turned aspiring web developer, in his free time he plays video games and rock climbs.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Chris Bodin"
      >
        <p>
          <a href="https://www.linkedin.com/in/christopherbodin/">
            LinkedIn
          </a>
        </p>
      </Card>
    </Col>
  </Row>
      <Row>
      <Col
        m={6}>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={Freddy} reveal waves="light" style={{height: "400px", width: "100%"}}/>}
        reveal={<p>Freddy graduated from high school in 2020 since then he has been working trying to save up for college, but in the middle of 2021 Freddy found out about DevPoint Labs he knew he wanted to get into the tech world and DevPoint Labs seemed like a great opportunity to do so. For Freddy DevPoint Labs has taught him so much and is one of the best decisions he has made so far the great knowledge and skills he learned from all of his teachers and classmates is invaluable and is something he will never forget, but the most valuable thing that Freddy received from DevPoint Labs was a great mentality and a positive perspective on life. Now Freddy aspires to be a great web developer specializing in SQL and databases hoping to one day be able to work at Adobe.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Freddy Ramos"
      >
        <p>
          <a href="https://www.linkedin.com/in/freddyaramos/">
            LinkedIn
          </a>
        </p>
      </Card>
      </Col>
      <Col
        m={6}>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={Steph} reveal waves="light" style={{height: "400px", width: "100%"}}/>}
        reveal={<p>Stephanie has a background in marketing, fundraising, and recreation. She aspires to apply her experience in design, management, and working with people into a career of web development. A Texas native and Salt Lake resident, Stephanie enjoys spending her Saturdays in the mountains as much as possible.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Stephanie Medlin"
      >
        <p>
          <a href="https://www.linkedin.com/in/stephmedlin/">
            LinkedIn
          </a>
        </p>
      </Card>
    </Col>
    </Row>
  </MainContainer>
);

export default About;

