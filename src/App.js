import React from 'react';
import "./components/FontAwesomeIcons"
import './App.css';
import NavBar from './components/NavBar';
import Tournaments from './components/Tournaments';
import { BrowserRouter as Router, Route , Switch, NavLink, Link, withRouter} from 'react-router-dom'
import HowItWorks from './components/HowItWorks';
import Lobby from './components/Lobby';
import FreeFire from './components/FreeFire';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  AOS.init({
    duration : 2000
  })
  return (
    
    <Router>
      <div className="app">
      
        <ScrollToTop/>
        <Switch>
            <Route exact path="/FreeFire" component={FreeFire}>
                <NavBar/>
                <FreeFire />
            </Route>
            
            <Route exact path="/Tournaments" component={Tournaments}>
                <NavBar/>
                <Tournaments />
            </Route>
            <Route exact path="/">
                <NavBar/>
                <Lobby/>
            </Route>
            
                    
        </Switch>
        
      </div>
    </Router>

    
    
  );
}

export default App;
