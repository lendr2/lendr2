import React, {Component} from 'react';
import {Link} from 'react-router';

class Start extends Component {
  render() {

    return (
      <div className="start">
        <h1>Lendr</h1>
        <h4>share stuff with your friends</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Start;
