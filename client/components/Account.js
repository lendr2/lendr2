import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//////////////////////////////
// Where our Nav Bar will live
// Toggle through 'userInfo' + 'upload' + 'makeRequest' + 'wishlist'

class Account extends Component {
  render() {
    return (
      <div className="account-container">
        <Link className="btn btn-default" activeClassName="btn btn-primary" to="/userInfo">Account </Link>
        <Link className="btn btn-default" activeClassName="btn btn-primary" to="/upload">Upload </Link>
        <Link className="btn btn-default" activeClassName="btn btn-primary" to="/makeRequest">Make Request </Link>
        <Link className="btn btn-default" activeClassName="btn btn-primary" to="/wishlist">Wishlist </Link>
        {this.props.children}
      </div>
    );
  }
}

export default Account;