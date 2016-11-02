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
<<<<<<< HEAD
        <Tile 
          borrowItem={ this.props.borrowItem.bind(this) }
          deleteItem={ this.props.deleteItem.bind(this) }
=======
        <Tile
          deleteTile={this.props.deleteTile.bind(this)}
>>>>>>> 7fa259602cc916c19814bb50ff9e3d4998149fe4
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
