import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import songService from './services/songs';

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  async getSongs() {
    return await songService.query()
      .then(songs => {
        this.setState({ songs });
      });
  }

  async removeSong(song) {
    await songService.remove(song._id);
    this.getSongs();
  }

  componentDidMount() {
    this.getSongs();
  }
  render() {
    const { songs } = this.state;
    const songsList = songs.map((song, i) => (
      <tr key={song._id}>
        <td>{song.name}</td>
        <td>{song._id}</td>
        <td>
          <Button bsSize="small" onClick={() => this.removeDong(song)}>Remove</Button>
          <Button bsSize="small"><Link to={`/songs/${song._id}`}>Edit</Link></Button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h1>Songs Page</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Name</td>
              <td>ID</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {songsList}
          </tbody>
        </table>
        <Link to="/songs/add">Add Song</Link>
      </div>
    )
  }
}
export default SongsList;