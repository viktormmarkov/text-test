import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import AddArtist from './AddArtist';
import artistService from './services/artists';

class AllArtists extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    };
  }

  async getArtists() {
    artistService.query()
      .then(artists => {
        this.setState({artists});
      });
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
class Artists extends Component {
  render() {
    return (
      <Switch>
         <Route exact path='/artists' component={AllArtists}/>
         <Route path='/artists/add' component={AddArtist}/>
      </Switch>
    );
  }
}

export default Artists;