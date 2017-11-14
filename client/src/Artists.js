import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';

class Artists extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    };
  }
  componentDidMount() {
    fetch('/artists', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(async res => {
      const artists = await res.json();
      this.setState({artists});
    })
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
        <Button>Add Artist</Button>
        
      </div>
    );
  }
}

export default Artists;