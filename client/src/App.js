import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Rap Stats</a>
              </Navbar.Brand>
              <Nav>
                <NavItem eventKey={1} href="#">Add artist</NavItem>
                <NavItem eventKey={2} href="#">Add song</NavItem>
              </Nav>
            </Navbar.Header>
        </Navbar>
        <Jumbotron>
        <Grid>
          <h1>Raps meets raps</h1>
        </Grid>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
