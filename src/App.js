//import logo from './logo.svg';
import "./App.css";
import About from "./components/About.js";
import BootcampOptions from "./components/BootcampOptions/index";
import Footer from "./components/Footer/index";
import Home from "./components/HomeScreen/Home.js";
import Mentors from "./components/Mentors/index";
import Navigation from "./components/Navigation";
import ReactGA from "react-ga";
import Resource from "./components/Resources/index";
import RouteChangeTracker from "./components/RouteChangeTracker";
import Schedule from "./components/Schedule/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const TRACKING_ID = "UA-185881457-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, { testMode: process.env.NODE_ENV === "test" });

ReactGA.exception({
  description: "An error ocurred",
  fatal: true,
});

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <RouteChangeTracker />
        <Switch>
          <Route path="/resources" component={Resource} />
          <Route path="/options" component={BootcampOptions} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
