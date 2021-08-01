//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Mentors from './components/Mentors';
import Resource from './components/Resource';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <BrowserRouter>
          <Switch>
             <Route path='/contact' component={Contact}/>
             <Route path='/resources' component={Resource}/>
             <Route path='/mentors' component={Mentors}/>
             <Route path='/schedule' component={Schedule}/>                
             <Route path='/about' component={About}/>  
             <Route path='/' component={Home}/>            
          </Switch>
      </BrowserRouter>            
          
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
