import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Songs from './Songs';
import Artists from './Artists';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Rap Stats</a>
                </Navbar.Brand>
                <Nav>
                  <NavItem><NavLink to="/">Home</NavLink></NavItem>
                  <NavItem><NavLink to="/artists">Artists</NavLink></NavItem>
                  <NavItem><NavLink to="/songs">Songs</NavLink></NavItem>
                </Nav>
              </Navbar.Header>
          </Navbar>
          <div className="layout-container">
            <Grid>
                <Route exact path="/" component={Home}/>
                <Route path="/artists" component={Artists}/>
                <Route path="/songs" component={Songs}/>
            </Grid>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;