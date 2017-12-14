import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import AddArtist from './AddArtist';
import artistService from './services/artists';

class ArtistsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    };
  }

  async getArtists() {
    return await artistService.query()
      .then(artists => {
        this.setState({artists});
      });
  }

  async removeArtist(artist) {
    return await artistService.remove(artist._id);
  }

  componentDidMount() {
    this.getArtists();
  }
  render() {
    const {artists} = this.state;
    const artistList = artists.map((artist, i) => (
      <tr key={artist._id}>
        <td>{artist.name}</td>
        <td>{artist._id}</td>
        <td>
          <Button bsSize="small" onClick={() => this.removeArtist(artist)}>Remove</Button>
          <Button bsSize="small"><Link to={`/artists/${artist._id}`}>Edit</Link></Button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h1>Artists Page</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
            <td>Name</td>
            <td>ID</td>
            <td></td>
            </tr>
          </thead>
          <tbody>
            {artistList}
          </tbody>
        </table>
        <Button><Link to="/artists/add">Add Artist</Link></Button>
      </div>
    )
  }
}
export default ArtistsList;