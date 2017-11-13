import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Artists = () => (
  <div>
    <h2>Artists</h2>
  </div>
)

const Songs = () => (
  <div>
    <h2>Songs</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar inverse fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Rap Stats</a>
                </Navbar.Brand>
                <Nav>
                  <NavItem><Link to="/"></Link>Home</NavItem>
                  <NavItem><Link to="/artists">Artists</Link></NavItem>
                  <NavItem><Link to="/songs">Songs</Link></NavItem>
                </Nav>
              </Navbar.Header>
          </Navbar>
          <Jumbotron>
          <Grid>
            <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/artists" component={Artists}/>
              <Route path="/songs" component={Songs}/>
          </Grid>
        </Jumbotron>
        </div>
      </Router>
    );
  }
}

export default App;