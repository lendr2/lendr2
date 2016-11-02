import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Lendr extends Component {
  render() {
    return (
      <div className='lendr'>
        {this.props.children}
      </div>
    )
  }
}

export default Lendr;
