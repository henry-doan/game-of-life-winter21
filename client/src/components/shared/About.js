import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';


const About = () => (
  <Row>
    <Col
      m={6}
      s={12}
    >
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image='http://www.chantelcooke.com/wp-content/uploads/2018/11/0C25CB73-C11B-42A7-B722-00B0ABCEB5FA.jpg' reveal waves="light"/>}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Chantel Cooke"
      >
        <p>
          <a href="#">
            This is a link
          </a>
        </p>
      </Card>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Chris Bodin"
      >
        <p>
          <a href="#">
            This is a link
          </a>
        </p>
      </Card>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Freddy Ramos"
      >
        <p>
          <a href="#">
            This is a link
          </a>
        </p>
      </Card>
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title="Stephanie Medlin"
      >
        <p>
          <a href="#">
            This is a link
          </a>
        </p>
      </Card>
    </Col>
  </Row>
  
);

export default About;