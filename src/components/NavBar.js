import React from 'react'
import "../components/FontAwesomeIcons"
import '../styles/components/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route , Switch, NavLink, Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Tournaments from './Tournaments'
import HowItWorks from './HowItWorks'
import Lobby from './Lobby'
import ScrollToTop from './ScrollToTop'


function NavBar() {
    return (
            
        <Router>
            <ScrollToTop />
            <div className="navBar">
                <div className="navContainer">
                    <div className="nav">
                        <div className="nav__left">
                                <Link to="/">
                                    <img src="https://i.ibb.co/h7jg8YF/navLogo.png" alt="navLogo" border="0"/>
                                </Link>
                            
                        </div>
                        <div className="nav__middle">
                            <NavLink exact to="/" className="notSelected" activeClassName="selected">
                                Lobby
                            </NavLink>
                            <NavLink exact  className="notSelected" to="/Tournaments" activeClassName="selected">
                                Tournaments
                            </NavLink>
                            <NavLink exact  className="notSelected" to="/HowItWorks" activeClassName="selected">
                                How It Works
                            </NavLink>
                           
                        </div>
                        
                        <div className="nav__right">
                        {/*<Link  to="/">
                            <img class="discordImage" src="https://i.ibb.co/F6n1SwT/image-3.png" alt="navLogo" border="0"/>
                        </Link>*/}
                        <button class="button" id="SignUpButton"variant="contained" color="primary">
                            SIGN UP
                        </button>
                        </div>

                    </div>
                </div>
            </div>

                <Switch>
                    <Route exact path="/">
                        <Lobby/>
                    </Route>
                    <Route exact path="/Tournaments" component={Tournaments}>
                        <Tournaments />
                    </Route>
                    <Route exact path="/HowItWorks" component={HowItWorks}>
                        <HowItWorks/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default NavBar
