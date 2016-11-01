import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Signup extends Component {

  createUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const location = event.target.elements[3].value + ', ' + event.target.elements[4].value;

    // post request to create new user, redirects to signup page for invalid inputs
    $.post('/signup', { username: username, password: password, email: email, location: location, karma: 0 })
      .done((data) => {
        browserHistory.push('/browse');
      })
      .fail(() => {
        browserHistory.push('/signup');
      })
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.createUser}>
          <div className="form-group">
            <label for="username">Username:</label>
            <input type="text" className="form-control" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" className="form-control" name="password" placeholder="password" />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label for="street">Street Address:</label>
            <input type="text" className="form-control" name="street" placeholder="street address" />
          </div>
          <div className="form-group">
            <label for="zipcode">ZIP Code:</label>
            <input type="text" className="form-control" name="zipcode" placeholder="ZIP code" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <Link to="/" className="btn btn-primary">Back</Link>
        </form>
      </div>
    );
  }
}

export default Signup;
