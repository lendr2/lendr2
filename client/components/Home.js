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
    this.borrowItem = this.borrowItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.removeCookies = this.removeCookies.bind(this);
    console.log("Home Username is", this.state.username)
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

  borrowItem(username, tileData, tileId) {
    console.log(`borrowItem: username is ${username} and ownername is ${tileData[tileId].ownername}`)
    if (username !== tileData[tileId].ownername) {
      console.log("Borrowing")
      $.post('/borrowItem', { username: username, tileData: tileData[tileId] })
        .done((data) => {
          console.log("Borrow successful")
          let newTiles = this.state.tileData;
          newTiles[tileId].lendee = username;
          this.setState({ tileData: newTiles })
        })
        .fail((error) => console.log('Error with borrowItem', error.responseText));
    } else { console.log("The owner cannot borrow their own item.") }
  }

  deleteItem(username, tileData, tileId) {
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
  removeCookies(){
     document.cookie = 'username' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        username: this.state.username,
        state: this.state,
        getData: this.getData,
        borrowItem: this.borrowItem,
        deleteItem: this.deleteItem
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
          <Link to="/userInfo" className="btn btn-default" activeClassName="btn btn-primary">Transactions</Link>
          <Link to="/" onClick={this.removeCookies} className="btn btn-default" activeClassName="btn btn-primary">Logout</Link>
        </div>
        {children}
      </div>
    );
  }
}

export default Home;
