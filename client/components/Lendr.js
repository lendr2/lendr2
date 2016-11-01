import React, { Component } from 'react';

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
