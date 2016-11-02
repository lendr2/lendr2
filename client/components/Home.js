import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
const cookieParser = require('cookie-parser');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: document.cookie.split("=").pop(),
      isFlipped: [],
      tileData: [],
    }
    this.getData = this.getData.bind(this);
    this.deleteTile = this.deleteTile.bind(this);
  }

  getData() {
    $.get('/browse').done(data => {
      const flipStatusArr = new Array(data.length).fill(false);
      this.setState({
        isFlipped: flipStatusArr,
        tileData: data
      });
    });
  }
  
  deleteTile(username, tileData, tileId) {
    if (username === tileData[tileId].ownername) {
      $.post('/deleteItem', { username: username, itemname: tileData[tileId].itemname })
        .done((data) => {
          let newTiles = this.state.tileData;
          newTiles.splice(tileId, 1);
          this.setState({ tileData: newTiles })
        })
        .fail((error) => console.lof('error with deleteItem', error));
    } else { console.log("Only the owner can delete an item.") }
  }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        state: this.state,
        getData: this.getData,
        deleteTile: this.deleteTile
      });
    });

    return (
      <div className="home">
        <h1>Lendr</h1>
        <div>
          <Link to="/browse" className="btn btn-default" activeClassName="btn btn-primary">Browse</Link>
          <Link to="/upload" className="btn btn-default" activeClassName="btn btn-primary">Upload</Link>
          <Link to="/requested" className="btn btn-default" activeClassName="btn btn-primary">Requested</Link>
          <Link to="/makeRequest" className="btn btn-default" activeClassName="btn btn-primary">Make Request</Link>
          <Link to="/account" className="btn btn-default" activeClassName="btn btn-primary">Account</Link>
          <Link to="/" className="btn btn-default" activeClassName="btn btn-primary">Logout</Link>
        </div>
        {children}
      </div>
    );
  }
}

export default Home;
