//import logo from './logo.svg';
import './App.css';
import Home from './components/HomeScreen/Home.js';
import About from './components/About.js';
import Schedule from './components/Schedule';
import Mentors from './components/Mentors';
import Resource from './components/Resource';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './components/Contact/index';
import ReactGA from 'react-ga';
import RouteChangeTracker from './components/RouteChangeTracker';
import BootcampOptions from './components/BootcampOptions';

const TRACKING_ID = "UA-185881457-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, { testMode: process.env.NODE_ENV === 'test' });

ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
      <RouteChangeTracker/>
          <Switch>
             {/* <Route path='/contact' component={Contact}/> */}
             <Route path='/resources' component={Resource}/>
             <Route path='/options' component={BootcampOptions}/>
             <Route path='/mentors' component={Mentors}/>
             <Route path='/schedule' component={Schedule}/>                
             <Route path='/about' component={About}/>  
             <Route path='/' component={Home}/>            
          </Switch>
      </BrowserRouter> 
      <Contact/>
      {/* <Home /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
