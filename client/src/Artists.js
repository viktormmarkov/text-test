import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddArtist from './AddArtist';
import ArtistsList from './ArtistsList';
class Artists extends Component {
  render() {
    return (
      <Switch>
         <Route exact path='/artists' component={ArtistsList}/>
         <Route path='/artists/add' component={AddArtist}/>
         <Route path='/artists/:_id' component={AddArtist}/>
      </Switch>
    );
  }
}

export default Artists;