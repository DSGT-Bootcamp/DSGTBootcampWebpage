// import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Col, Row } from "react-bootstrap";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// // import "./Navigation.css";
// import DSGTLogo from "../images/bg.png";

// // import * as ROUTES from "../../config/routes";

// var divPadding = {
//   paddingTop: "4em",
// };

// export default class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar
//           className="justify-content-center main"
//           style={divPadding}
//           sticky="bottom"
//         >
//           <Row>
//             <Col>
//               <Navbar.Brand href="https://datasciencegt.org/">
//                 <img src={DSGTLogo} height="300" alt="DSGT icon" />
//               </Navbar.Brand>
//             </Col>
//           </Row>
//         </Navbar>
//       </div>
//     );
//   }
// }



// import React from 'react';
// import { SocialIcon } from 'react-social-icons';
// import Paper from "@material-ui/core/Paper";


// // class Contact extends React.Component {
// //   render() {
// //     return (
// //       <div className="home">
// //         <div class="container">
// //           <div class="row align-items-center my-5">
// //             <div class="col-lg-7">
// //             </div>
// //             <div class="col-lg-5">
// //               <h1 class="font-weight-bold">Contact Us</h1>
// //               <p>
// //               <a href = "mailto: dsgtbootcamp@gmail.com"><font size="+3">Email DSGT Bootcamp!</font></a>
              
// //               </p>
              
// //             </div>
// //             <SocialIcon url="https://www.linkedin.com/company/dsgt/mycompany/" style={{ height: 100, width: 100 }} />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// // export default Contact;

// import BottomNavigation from 'reactjs-bottom-navigation';
// import 'reactjs-bottom-navigation/dist/index.css';

// // const styles = {
// //   stickToBottom: {
// //     width: '100%',
// //     position: 'fixed',
// //     bottom: 0,
// //   },
// // };

//   // items
// const bottomNavItems = [
//     {
//       // title: 'Facebook',
//       icon: <SocialIcon url="https://www.facebook.com/datasciencegt/"/>
//     },

//     {
//       // title: 'LinkedIn',
//       icon: <SocialIcon url="https://www.linkedin.com/company/dsgt/mycompany/"/>
//     },

//     {
//       // title: 'Email Us!',
//       icon: <SocialIcon url="mailto: dsgtbootcamp@gmail.com"/>
//     },
//   ]

//   var divPadding = {
//     paddingTop: "4em",
//   };

// class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation
//           // className={stickToBottom}
//           items={bottomNavItems}
//           defaultSelected={0}
//           onItemClick={(item) => console.log(item)}
//           style={divPadding}
//           sticky="bottom"
//           // positionMode={positionMode.value}
//           // style={
//           //   position = "sticky"
//           //     // ? {
//           //     //     bottom: 0,
//           //     //   }
//           //     // : undefined
//           // }
//           // class = "bottom-nav"
//         />
//         </Paper> 
//       </div>
//     );
//   }
// }

// export default Contact;

// // import { Navbar, Nav, Container } from 'react-bootstrap';
// // import { SocialIcon } from 'react-social-icons';
// // import Logo from '../images/dsgtlogo (1).png';

// // const Navigation = () => {
// //     return (
// //         <>
// //             <Navbar collapseOnSelect expand='sm' bg='transparent' variant = "dark" class='container-fluid'>
// //                 <Container>
// //                     <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
// //                     <Navbar.Collapse id='responsive-navbar-nav'>
// //                         <Nav>
// //                         <img
// //                             src = {Logo}
// //                             // src="data:image/png;base64,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"
// //                             alt="dsgt logo"
// //                             width="32"
// //                             height="32"
// //                         />
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/'>Home</Nav.Link>
// //                             </Nav.Item>
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/about'>About</Nav.Link>
// //                             </Nav.Item>
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/schedule'>Schedule</Nav.Link>
// //                             </Nav.Item>
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/mentors'>Mentors</Nav.Link>
// //                             </Nav.Item>
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/resources'>Resources</Nav.Link>
// //                             </Nav.Item>
// //                             <Nav.Item className="ml-auto">
// //                                 <Nav.Link href='/contact'>Contact</Nav.Link>

// //                             </Nav.Item>  
// //                         </Nav>
// //                     </Navbar.Collapse>
// //                 </Container>
// //             </Navbar>
// //         </>
// //     );
// // }

// // export default Navigation;
