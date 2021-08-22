 import Fade from 'react-reveal/Fade';
import React from "react";
import Bounce from 'react-reveal/Bounce';
import Announcement from 'react-announcement';
import ParticlesBg from 'particles-bg';
// can customize the particles if you want
// let config = {
//  num: [4, 7],
//  rps: 0.1,
//  radius: [10, 40],
//  life: [1.5, 3],
//  v: [2, 3],
//  tha: [-40, 40],
//  alpha: [0.6, 0],
//  scale: [1, 0.1],
//  position: "center", // all or center or {x:1,y:1,width:100,height:100}
//  color: ["random", "#ff0000"],
//  cross: "dead", // cross or bround
//  random: 100,  // or null,
//  g: 5,    // gravity
//  onParticleUpdate: (ctx, particle) => {
//    ctx.beginPath();
//    ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
//    ctx.fillStyle = particle.color;
//    ctx.fill();
//    ctx.closePath();
//  }
// };
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div class="container">
              <Bounce left><header>DS @ GT BOOTCAMP</header></Bounce>
              <homePageSubtitle>
                <Fade right>Learn Data Science Principles tailored towards real-world applications</Fade>
              </homePageSubtitle>
          <ParticlesBg type="cobweb" num = {1500} bg={true} color = "#008080" />
          <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          />
        </div>
      </div>
    );
  }
}
export default Home;

