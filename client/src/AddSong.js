import React, { Component } from 'react';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import songService from './services/songs';

class AddSong extends Component {
  constructor(props) {
    super(props);
    const _id = props.match.params._id;
    this.state = {
      name: "",
      _id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  componentDidMount() {
    const { _id } = this.state;
    if (_id) {
      songService.get(_id).then(song => this.setState({ name: song.name }));
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { _id } = this.state;

    if (!_id) {
      await this.addSong();
    } else {
      await this.updateSong();
    }
    this.props.history.push("/songs");
  }

  async addSong() {
    const name = this.state.name || '';
    const lyrics = this.state.lyrics || '';
    return songService.add({ name, lyrics });
  }

  async updateSong() {
    const name = this.state.name || "";
    const lyrics = this.state.lyrics || '';
    const _id = this.state._id;
    return songService.update({ name, _id, lyrics });
  }

  render() {
    const { _id } = this.state;
    return <div>
        <h1>{_id ? "Edit song" : "Add song"}</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name</ControlLabel>
            <FormControl bsSize="lg" type="text" value={this.state.name} placeholder="Song name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Lyics</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" value={this.state.lyrics} placeholder="Song name"/>
          </FormGroup>
          <Button type="submit">{_id ? "Update" : "Add"}</Button>
        </form>
      </div>;
  }
}

export default AddSong;