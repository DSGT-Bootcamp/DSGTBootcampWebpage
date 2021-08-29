import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Button from 'react-bootstrap/Button';
import Announcement from 'react-announcement';
//import {Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                //class="img-fluid rounded mb-4 mb-lg-0"
                //src="http://placehold.it/900x400"
                //alt=""
              />
            </div>
            <div class="col-lg-7">
              <p></p>
              <Bounce left><h1 class="font-weight-light">DATA SCIENCE</h1></Bounce>
              <Bounce left><h1 class="font-weight-light">@ georgia tech</h1></Bounce>
                <Fade right>Welcome to DSGT! Our club is a diverse community of data science students 
                who are passionate about sharing our vision: data science with a focus on the community. 
                We fully believe that we can make impactful strides in improving our society through 
                real-world projects and workshops here at DSGT!</Fade>
                <p></p>
                <Button href="https://linktr.ee/dsgt" variant="outline-light" size="lg">Apply Today!</Button>{' '}
                <p></p>
                <p></p>
                <p></p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">What is Data Science?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">What is the significance?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Resources</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Card bg="dark" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://www.deburghgroup.com/wp-content/uploads/2019/02/1819_COECS_DataScienceMS.jpg" />
                          <Card.Body>
                            <Card.Title>Real-World</Card.Title>
                            <Card.Text>
                            Data science is a multfaceted approach of taking raw data and applying various analytical and machine learning techniques to extract patterns from the large quantities of datasets.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Card bg="dark" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg" />
                          <Card.Body>
                            <Card.Title>Community Impact</Card.Title>
                            <Card.Text>
                            Data science brings together areas of computer programming, statistics, and intelligence to uncover helpful insights for organizations.
                            The value of data is increasing because these hidden observations remove the risk factor for companies by detaching uncertainties.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Card bg="dark" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://paulvanderlaken.files.wordpress.com/2017/08/data-science-skills-network1-e1417010633616.jpg?w=900" />
                          <Card.Body>
                            <Card.Title>Tools for Data Analysis</Card.Title>
                            <Button href="https://www.kaggle.com/" variant="primary">Kaggle</Button>
                            <Button href="https://jakevdp.github.io/PythonDataScienceHandbook/" variant="primary">Python</Button>
                          </Card.Body>
                        </Card>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
            </div>
          </div>
          <Announcement
          title="Welcome!"
          subtitle="This website is a great resource to find all of the answers for your data science questions. Please contact the team if you have any more questions. Thanks!"
          link="https://github.com/kristofferandreasen/react-announcement"
          />
        </div>
      </div>
    );
  }
}


export default Home;