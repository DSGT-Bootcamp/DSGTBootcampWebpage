import React from "react";
import Button from 'react-bootstrap/Button';
//import {Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            </div>
            <div class="col-lg-7">
              <p></p>
              <h1 class="font-weight-light">DATA SCIENCE</h1>
              <h1 class="font-weight-light">at Georgia Tech</h1>
                <p>Welcome to DSGT Bootcamp! Our club is a diverse community of data science students 
                who are passionate about sharing our vision: data science with a focus on the community. 
                We fully believe that we can make impactful strides in improving our society through 
                real-world projects and workshops here at DSGT!</p>
                <p>Bootcamp provides an amazing opportunity to learn data science 
                skills using Python, NumPy, Pandas, and other machine learning techniques to create a project that will could potentially 
                solve a real-world problem. Click on the button below to apply today and gain significant insight through this experience!</p>
                <p></p>
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfv3_12vdyWsy_Lz9u3DCarO1Mw_HxIsF3hzm-92KOVU_otwQ/viewform" variant="outline-light" size="lg">Apply Today!</Button>{' '}
                <Button href="https://forms.gle/C9crXxNJ5S8KEY3FA" variant="outline-light" size="lg">Register your Bootcamp Project Team!</Button>{' '}
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
        </div>
      </div>
    );
  }
}
export default Home;
