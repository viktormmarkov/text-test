import React, { Component } from 'react';
import { Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import artistService from './services/artists';

class AddArtist extends Component {
  constructor(props) {
    super(props);
    const _id = props.match.params._id;    
    this.state = {
      name: '',
      _id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  componentDidMount() {
    const {_id} = this.state;
    if (_id) {
      artistService.get(_id).then(artist => this.setState({name: artist.name}));
    }    
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {_id} = this.state;
    
    if (!_id) {
      await this.addArtist();
    } else {
      await this.updateArtist()
    }
    this.props.history.push('/artists')
  }

  async addArtist() {
    const name = this.state.name || '';
    return artistService.add({name});
  }

  async updateArtist() {
    const name = this.state.name || '';
    const _id = this.state._id;
    return artistService.update({name, _id});
  }

  render() {
    const {_id} = this.state;
    return (
      <div>
      <h1>{ _id ? 'Edit artist' : 'Add artist' }</h1>
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
        <Button type="submit">{ _id ? 'Update' : 'Add' }</Button>
      </form>
      </div>
    )
  }
}

export default AddArtist;