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
          borrowItem={ this.props.borrowItem.bind(this) }
          deleteItem={ this.props.deleteItem.bind(this) }
          tileId={i}
          passedState={this.props.state}
          />
      )
    }
    const tilesLent = tiles.filter(t => { return this.props.state.username === this.props.state.tileData[t.props.tileId].ownername && !!this.props.state.tileData[t.props.tileId].lendee})
    const tilesBorrowed = tiles.filter(t => { return this.props.state.username === this.props.state.tileData[t.props.tileId].lendee })

    return (
      <div>
        <br />
        <div className="flex-grid">
          <div className="col">
            <div className="col-title">Stuff I Lent</div>
            {tilesLent}
          </div>
          <div className="col">
            <div className="col-title">Stuff I Borrowed</div>
            {tilesBorrowed}
          </div>
        </div>
      </div>
    );
  }
}

export default Browse;
