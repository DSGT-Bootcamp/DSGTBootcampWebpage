import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../images/dsgtlogo (1).png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Footer'


const Contact = () => {
    return (
        <div style={{background: "#011c33", width: "100%", marginTop: "100px", padding: "0px", border: "0px", position: "sticky"}}>
            <Navbar collapseOnSelect expand='sm' variant='dark' class='container-fluid' style={{ height: "100px"}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'  style={{display: "flex", justifyContent: "center", margin: "0px"}}>
                        <Nav>
                        <Row>
                        {/* <p display="flex" justifyContent="center" marginBottom="500px">Contact us!</p> */}
                        </Row>
                        <Row style={{display: "flex", justifyContent: "center", verticalAlign: "middle"}}>
                            <Col>
                            <li class="nav-item">
                                <a>
                                <SocialIcon url="mailto: dsgtbootcamp@gmail.com"/>
                                </a>
                            </li>
                            </Col>
                            <Col>
                            <li class="nav-item">
                                <a>
                                <SocialIcon url="https://www.linkedin.com/company/dsgt/mycompany/"/>
                                </a>
                            </li>
                            </Col>
                            <Col>
                            <li class="nav-item">
                                <a>
                                <SocialIcon url="https://www.facebook.com/datasciencegt/"/>
                                </a>
                            </li>
                            </Col>
                        </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Footer/>
        </div>
    );
}

export default Contact;