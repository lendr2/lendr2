import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

//////////////////////////////
// Render Tile children here
import Tile from './Tile';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: [],
      tileData: [],
    };
  }

  componentDidMount() {
    // POST request to grab feed data upon component load
    $.get('/browse', (data) => {

      /////////////////////////////////////////////////////////
      // Create and fill an array with a 'false' flag
      // depending on the # of items in our feed database
      // react-flipcard defaults to 'false' when checking orientation of card
      let flipStatusArr = [];
      for (let i = 0; i < data.length; i++) {
        flipStatusArr.push(false);
      }

      // Then, setState so we can access that feed data at the Tile level
      this.setState({
        isFlipped: flipStatusArr,
        tileData: data
      })
    });
  }

  deleteTile(index, itemname) {
    console.log("Browse.js deleteTile")
    $.post('/deleteItem', { itemname: itemname })
      .done((data) => {
        let newTiles = this.state.tileData;
        newTiles.splice(index, 1);
        this.setState({ tileData: newTiles })
      })
      .fail(() => console.error('error with deleteItem'));
  }

  render() {
    // Render only as many Tiles as there are data from our GET request
    let tiles = [];
    let len = this.state.tileData.length;

    for (let i = 0; i < len; i++) {
      tiles.push(
        <Tile
          deleteTile={this.deleteTile.bind(this)}
          tileId={i}
          passedState={this.state}
          />
      );
    }

    return (
      <div className="browse-body">
        <div className="tile-container">
          {tiles}
        </div>
      </div>
    );
  }
}

export default Browse;
