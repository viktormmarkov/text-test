import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddSong from "./AddSong";
import SongsList from "./SongsList";

class Songs extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/songs" component={SongsList} />
        <Route path="/songs/add" component={AddSong} />
        <Route path="/songs/:_id" component={AddSong} />
      </Switch>
    );
  }
}

export default Songs;
