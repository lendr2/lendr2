import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//////////////////////////////
// Where our Nav Bar will live
// Toggle through 'userInfo' + 'upload' + 'makeRequest' + 'wishlist'

class Account extends Component {
  render() {
    return (
      <div className="account-container">

        <div className="feed-header-container text-center">
          <h2>Account Nav Hub</h2>
          <div className="feed-navbar">
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/browse">Browse </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/userInfo">Account </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/upload">Upload </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/makeRequest">Make Request </Link>
            <Link className="btn btn-default" activeClassName="btn btn-primary" to="/wishlist">Wishlist </Link>
          </div>
          </div>

          {this.props.children}
        </div>
        );
  }
}

export default Account;