import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: [],
      tileData: [],
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    $.get('/browse', (data) => {
      return data;
    }).done((data) => {
      const flipStatusArr = new Array(data.length).fill(false);
      this.setState({
        isFlipped: flipStatusArr,
        tileData: data
      });
    });
  }
  
  // deleteTile(index, itemname) {
  //   console.log("Browse.js deleteTile")
  //   $.post('/deleteItem', { itemname: itemname })
  //     .done((data) => {
  //       let newTiles = this.state.tileData;
  //       newTiles.splice(index, 1);
  //       this.setState({ tileData: newTiles })
  //     })
  //     .fail(() => console.error('error with deleteItem'));
  // }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        state: this.state,
        getData: this.getData
        
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
          <Link to="/" className="btn btn-default" activeClassName="btn btn-primary">Logout</Link>
        </div>
        {children}
      </div>
    );
  }
}

export default Home;
