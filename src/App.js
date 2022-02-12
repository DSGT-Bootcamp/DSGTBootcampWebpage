//import logo from './logo.svg';
import './App.css';
import About from './components/About.js';
import BootcampOptions from './components/BootcampOptions';
import Contact from './components/Contact/index';
import Home from './components/HomeScreen/Home.js';
import Mentors from './components/Mentors/index';
import Navigation from './components/Navigation';
import ReactGA from 'react-ga';
import Resource from './components/Resource';
import RouteChangeTracker from './components/RouteChangeTracker';
import Schedule from './components/Schedule/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
