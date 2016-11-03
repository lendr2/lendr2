import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import Tile from './Tile';

class Browse extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const length = this.props.state.tileData.length;
    const tilesLent = [];
    for (let i = 0; i < length; i++) {
      console.log(this.props.state.tileData[i])
      if (this.props.state.username === this.props.state.tileData[i].ownername && !!this.props.state.tileData[i].lendee) {
        tilesLent.push(
          <Tile
            borrowItem={this.props.borrowItem.bind(this)}
            deleteItem={this.props.deleteItem.bind(this)}
            passedState={this.props.state}
            />
        );
      }
    }
    const tilesBorrowed = [];
    for (let i = 0; i < length; i++) {
      if (this.props.state.username === this.props.state.tileData[i].lendee) {
        tilesBorrowed.push(
          <Tile
            borrowItem={this.props.borrowItem.bind(this)}
            deleteItem={this.props.deleteItem.bind(this)}
            passedState={this.props.state}
            />
        );
      }
    }
    return (
      <div>
        <br />
        <div className="flex-grid">
          <div className="col">Stuff I Lent {tilesLent}</div>
          <div className="col">Stuff I Borrow {tilesBorrowed}</div>
        </div>
      </div>
    );
  }
}

export default Browse;
