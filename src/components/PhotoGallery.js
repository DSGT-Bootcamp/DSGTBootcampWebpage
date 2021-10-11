import React from "react";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Vindhya from '../images/vindhya.png';
import Neil from '../images/neil.png';
import Harris from '../images/harris.png';
import Karthik from '../images/karthik.png';
import Shasha from '../images/shasha.png';
import Nathan from '../images/nathan.png';
import Joseph from '../images/joseph.png';
import Long from '../images/long.png';
import Nick from '../images/nicholas.png';

var divPadding = {
  padding: "3em 0 3em 0",
}
var divPaddingInner = {
  padding: "0 0 3em 0",
}
var noBorder = {
  border: "none",
  color: "white",
}

class PhotoGallery extends React.Component {
  render() {
    return(
      <div style={divPadding}>
      <Container>
      <div style={divPaddingInner}>
      <CardDeck>
      <Card style={noBorder} bg="dark"> {/*Vindhya*/}
        <Card.Img src={Vindhya}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Vindhya Pasala</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 2nd
            Fun Facts: I am a henna artist and a huge foodie who loves to try new ethnic foods. My favorite TV show is Psych and I love to play tennis in my free time.
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Neil*/}
        <Card.Img src={Neil}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Neil Patel</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 3rd
            Fun Facts: I am a big Apple fan, I exclusively use their products (Apple Music{'>'}{'>'}{'>'}Spotify)
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Harris*/}
        <Card.Img src={Harris}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Harris Barton</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 3rd
            Fun Facts: I enjoy playing chess, and am an active Brazilian Jiu Jitsu and Muay Thai practicioner. 
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Karthik*/}
        <Card.Img src={Karthik}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Karthik Subramanian</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 3rd
            Fun Facts: I enjoy cooking, riding bikes, hiking, and learning about new concepts.
          </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
      <Card style={noBorder} bg="dark"> {/*Shasha*/}
        <Card.Img src={Shasha}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Shasha Liao</h4></Card.Title>
          <Card.Text>
            Major: Mathematics and Computational Science and Engineering
            Year: 4th
            Fun Facts: I believe that UFOs exist and they might come from beyond Earth!
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Nathan*/}
        <Card.Img src={Nathan}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Nathan Zhong</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 1st
            Fun Facts: I have a mini golden poodle puppy called Coco
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Joseph*/}
        <Card.Img src={Joseph}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Joseph Cannady</h4></Card.Title>
          <Card.Text>
            Major: Electrical Engineering
            Year: 2nd
            Fun Facts: I have a crippling addiction to Dr. Pepper
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Long*/}
        <Card.Img src={Long}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Long Lam</h4></Card.Title>
          <Card.Text>
            Major: Computer Science
            Year: 1st
            Fun Facts: I have never pulled an all-nighter
          </Card.Text>
          </Card.Body>
        </Card>
        <Card style={noBorder} bg="dark"> {/*Nick*/}
        <Card.Img src={Nick}/>
          <Card.Body>
          <Card.Title className="text-center"><h4>Nicholas Zhang</h4></Card.Title>
          <Card.Text>
            Major: Mechanical Engineering
            Year: 1st
            Fun Facts: I play piano and my high school was across the street from the airport.
          </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      </div>
      </Container>
      </div>
    );
  }
}
export default PhotoGallery;
