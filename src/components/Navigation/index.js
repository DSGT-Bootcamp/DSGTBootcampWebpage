import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../images/dsgtlogo (1).png';

const Navigation = () => {
    return (
        <div style={{background: "#011c33", width: "100%", height: "100px", position: "sticky"}}>
            <Navbar collapseOnSelect expand='sm' variant='dark' class='container-fluid'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav' style={{display: "flex", alignItems: "center", lineHeight: "60px"}}>
                        <Nav>
                        <Nav.Item className="ml-auto">
                        <img
                            src = {Logo}
                            alt="dsgt logo"
                            width="32"
                            height="32"
                            display="flex"
                            lineHeight="60px"
                        />                        
                        </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/about'>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/schedule'>Schedule</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/mentors'>Mentors</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/resources'>Resources</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-auto">
                                <Nav.Link href='/options'>Bootcamp Options</Nav.Link>

                            </Nav.Item>  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
