import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Signup extends Component {
  createUser(event) {
    // prevent page refresh
    event.preventDefault();

    // access username and password values
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const location = event.target.elements[2].value + ', ' + event.target.elements[3].value;

    //////////////////////////////////
    // Post request to create new user
    // Redirects to signup page for invalid inputs
    // Maybe create error page 
    $.post('/signup', { username: username, password: password, location: location, karma: 0 })
      .done((data) => {
        browserHistory.push('/browse');
      })
      .fail(() => {
        browserHistory.push('/');
      })
  }

  render() {
    return (
      <div className="start-container">
        <h1>Lendr</h1>
        <br />
        <h3>share stuff with your friends.</h3>
        <br />
        <br />
        <form className="form-inline" onSubmit={this.createUser}>
          <input type="text" className="form-control" name="username" placeholder="username" /><br />
          <input type="password" className="form-control" name="password" placeholder="password" /><br />
          <input type="text" className="form-control" name="street" placeholder="street address" /><br />
          <input type="text" className="form-control" name="zipcode" placeholder="zip code" /><br />
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <Link to="/" className="btn btn-primary start-btn">Back</Link>
        </form>
      </div>
    );
  }
}

export default Signup;
