import React from 'react';
import { SocialIcon } from 'react-social-icons';
class Contact extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Contact Us</h1>
              <p>
              <a href = "mailto: dsgtbootcamp@gmail.com"><font size="+3">Email DSGT Bootcamp!</font></a>
              
              </p>
              
            </div>
            <SocialIcon url="https://www.facebook.com/datasciencegt/" style={{ height: 100, width: 100 }}/>
            <SocialIcon url="https://www.linkedin.com/company/dsgt/mycompany/" style={{ height: 100, width: 100 }} />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
