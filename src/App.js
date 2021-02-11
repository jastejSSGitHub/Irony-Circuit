import React from 'react';
import "./components/FontAwesomeIcons"
import './App.css';
import NavBar from './components/NavBar';
import Tournaments from './components/Tournaments';
import { BrowserRouter as Router, Route , Switch, NavLink, Link, withRouter} from 'react-router-dom'
import HowItWorks from './components/HowItWorks';
import Lobby from './components/Lobby';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        
        
        
        
              
           
      </div>
    </Router>
    
  );
}

export default App;
