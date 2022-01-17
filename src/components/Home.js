import React from "react";
import Button from 'react-bootstrap/Button';
//import {Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Background from '../images/homepage_background.jpg';
import Container from 'react-bootstrap/Container';
// import Navigation from 'Navigation.js';

class Home extends React.Component {
  render() {
    return (
      <div>
      {/* <h1 class="font-weight" style={{color: "white", textAlign: "center",  paddingTop: "30px"}}></h1> */}
      <div style={{backgroundColor: "gray", paddingTop: "40px", paddingLeft: "50px"}}>
          <Row style={{width: "100%"}}>
            <Col>
              <Container>
                <h2>Data Science at Georgia Tech Bootcamp</h2>
                <p class="font-weight-light">Welcome to DSGT Bootcamp! Our club is a diverse community of data science students 
                who are passionate about sharing our vision: data science with a focus on the community. 
                We fully believe that we can make impactful strides in improving our society through 
                real-world projects and workshops here at DSGT!</p>
              </Container>
              <Container>
                <p class="font-weight-light">Bootcamp provides a valuable opportunity to learn data science skills using Python, NumPy, Pandas, and other machine learning techniques and create a project that will could potentially 
                solve a real-world problem. Click on the button below to apply today and gain significant insight through this experience!</p>
              </Container>
              <Container align="center" style={{paddingTop: "25px", paddingBottom: "50px"}}>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfv3_12vdyWsy_Lz9u3DCarO1Mw_HxIsF3hzm-92KOVU_otwQ/viewform" variant="outline-light" size="lg">Apply Today!</Button>{' '}
              <Button href="https://forms.gle/C9crXxNJ5S8KEY3FA" variant="outline-light" size="lg">Register your Bootcamp Project Team!</Button>{' '}
            </Container>
            </Col>
            <Col align="center">
              <Container>
              <img src = {Background} style={{height: "400px", width: "auto"}} alt="workshop 4"></img>
              </Container>
            </Col>
          </Row>
      </div>
      <div className="home" width="100%" style={{background: "white", height: "500px", display: "flex", justifyContent: "center", paddingTop: "50px", paddingBottom: "50px"}}>
        {/* <div class="container" justifyContent="center">
          <div>
            <div class="col-lg-7" style={{display: "flex", justifyContent: "center"}}>
            </div>
            <div class="col-lg-7"  style={{display: "flex", justifyContent: "center"}}>
            <div style={{paddingTop: "80px", paddingBottom: "80px",}}> */}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{}}>
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column" style = {{backgroundColor: "transparent"}}>
                        <Nav.Item>
                          <Nav.Link eventKey="first" style={{color: "black"}}>What is Data Science?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" style={{color: "black"}}>What is its significance?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third" style={{color: "black"}}>Resources</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Card bg="dark" style={{ width: '18rem', border: "none"}}>
                          <Card.Img variant="top" src="https://www.deburghgroup.com/wp-content/uploads/2019/02/1819_COECS_DataScienceMS.jpg" />
                          <Card.Body>
                            <Card.Title>Real-World</Card.Title>
                            <Card.Text>
                            Data science is a multifaceted approach of taking raw data and applying various analytical and machine learning techniques to extract patterns from the large quantities of datasets.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Card bg="dark" style={{ width: '18rem',  border: "none"}}>
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
                        <Card bg="dark" style={{ width: '18rem',  border: "none"}}>
                          <Card.Img variant="top" src="https://paulvanderlaken.files.wordpress.com/2017/08/data-science-skills-network1-e1417010633616.jpg?w=900" />
                          <Card.Body>
                            <Card.Title style={{display: "flex", justifyContent: "center"}}>Tools for Data Analysis</Card.Title>
                            <Row style={{display: "flex", justifyContent: "center"}}>
                            <Button href="https://www.kaggle.com/" variant="primary" style={{marginBottom: "15px", display: "flex", justifyContent: "center"}}>Kaggle</Button>
                            </Row>
                            <Row style={{display: "flex", justifyContent: "center"}}>
                            <Button href="https://jakevdp.github.io/PythonDataScienceHandbook/" style={{display: "flex", justifyContent: "center"}} variant="primary">Python</Button>
                            </Row>
                          </Card.Body>
                        </Card>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                </div>
            </div>
      //     </div>
      //   </div>
      // </div>
      // </div>
    );
  }
}
export default Home;
