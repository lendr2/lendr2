import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import Tile from './Tile';

class Browse extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("Browse Username is", this.props.state.username)
    const tiles = [];
    const length = this.props.state.tileData.length;
    for (let i = 0; i < length; i++) {
      tiles[i] = (
        <Tile 
          borrowItem={ this.props.borrowItem.bind(this) }
          deleteItem={ this.props.deleteItem.bind(this) }
          tileId={i}
          passedState={this.props.state}
          />
      )
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
