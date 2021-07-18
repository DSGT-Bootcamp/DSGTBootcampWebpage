import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' class='container-fluid'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Item  className="ml-auto">
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
                                <Nav.Link href='/contact'>Contact</Nav.Link>

                            </Nav.Item> 
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;