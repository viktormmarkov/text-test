import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom'

class AddArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.addArtist();
    event.preventDefault();
  }

  addArtist() {
    const name = this.state.name || '';
    fetch('/artists', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name})
    });
  }

  render() {
    return (
      <div>
      <h1>Add artist</h1>
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            bsSize="lg"
            type="text"
            value={this.state.name}
            placeholder="Aritst name"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Add</Button>
      </form>
      </div>
    )
  }
}

export default AddArtist;