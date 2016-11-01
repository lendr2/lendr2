import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import moment from 'moment';

class Tile extends Component {
  constructor(props) {
    super(props);

    // Need to bind methods to this specific component in order to work
    this.clickToFlip = this.clickToFlip.bind(this);
    this.handleOnFlip = this.handleOnFlip.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  clickToFlip() {
    if (!this.props.passedState.isFlipped[this.props.tileId]) {
      this.props.passedState.isFlipped[this.props.tileId] = true;
      this.setState({
        isFlipped: this.props.passedState.isFlipped
      });
    } else {
      this.props.passedState.isFlipped[this.props.tileId] = false;
      this.setState({
        isFlipped: this.props.passedState.isFlipped
      });
    }
  }

  // From react-flipcard library - don't remove 
  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  // Flips back most recent card on 'escape' press
  handleKeyDown(e) {
    if (this.props.passedState.isFlipped[this.props.tileId] && e.keyCode === 27) {
      this.clickToFlip();
    }
    if (!this.props.passedState.isFlipped[this.props.tileId] && e.keyCode === 13) {
      this.clickToFlip();
    }
  }

  render() {
    let tileData = this.props.passedState.tileData;
    let tileId = this.props.tileId;

    return (
      <div className="item-tile" onClick={this.clickToFlip}>
        <FlipCard
          disabled={true}
          flipped={this.props.passedState.isFlipped[this.props.tileId]}
          onFlip={this.props.passedState.handleOnFlip}
          onKeyDown={this.handleKeyDown}
          >
          <div className="front-card">
            <img className="front-card-img" src={this.props.passedState.tileData[this.props.tileId].itempictureurl}></img>
          </div>
          <div className="back-card">
            <div className="back-child">{tileData[tileId].itemname}</div>
            <div className="back-child">{tileData[tileId].itemdescription}</div>
            <div className="back-child">{tileData[tileId].ownername}</div>
            <div className="back-child">{moment(tileData[tileId].datedue).format('MM/DD/YYYY')}</div>
            <Borrow tileId={tileId} />
            <Delete tileId={tileId} deleteTile={this.props.deleteTile.bind(this)} tileData={this.props.passedState.tileData[tileId]} />
          </div>
        </FlipCard>
      </div>
    );
  }
}

class Borrow extends Component {
  borrowItem() {
    console.log(`Trying to borrow.`);
    console.log("tileData", this.props.tileData.itemname);
  }
  render() {
    return (
      <div>
        <button type="submit" className="btn btn-borrow" onClick={ this.borrowItem.bind(this) }>Borrow this</button>
      </div>
    );
  }
}

class Delete extends Component {
  deleteItem() {
    //  Delete item from DB
    $.post('/deleteItem', { itemname: this.props.tileData.itemname })
      .done((data) => {
      this.props.deleteTile(this.props.tileId);
    })
    .fail(() => console.error('error with deleteItem'));
  }
  render() {
    return (
      <div>
        <button type="submit" className="btn btn-delete" onClick={ this.deleteItem.bind(this) }>Delete this</button>
      </div>
    );
  }
}

export default Tile;
