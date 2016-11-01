import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  render() {

    return (
      <div className="home">
        <h1>Lendr</h1>
        <div>
          <Link to="/browse" className="btn btn-primary">Browse</Link>
          <Link to="/requested" className="btn btn-primary">Requested</Link>
          <Link to="/account" className="btn btn-primary">Account</Link>
          <Link to="/" className="btn btn-primary">Logout</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
