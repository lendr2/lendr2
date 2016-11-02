import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import Tile from './Tile';

class Browse extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const tiles = [];
    const length = this.props.state.tileData.length;
    for (let i = 0; i < length; i++) {
      tiles[i] = (
        <Tile 
        // deleteTile = { this.deleteTile.bind(this) }
          tileId={i}
          passedState={this.props.state}
          />
      )
    }

    return (
      <div className="browse">
        {tiles}
      </div>
    );
  }
}

export default Browse;
