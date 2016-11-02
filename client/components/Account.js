import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

//////////////////////////////
// Where our Nav Bar will live
// Toggle through 'userInfo' + 'upload' + 'makeRequest' + 'wishlist'

class Account extends Component {
  render() {
    return (
      <div className="account">
        {this.props.children}
      </div>
    );
  }
}

export default Account;