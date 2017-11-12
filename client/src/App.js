import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getData() {
   return fetch(`artists`, {
    accept: 'application/json',
  }).then(async function (response) {
      const result = await response.text();
      console.log(result);
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    this.getData();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
