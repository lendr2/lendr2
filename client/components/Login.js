import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Login extends Component {

  verifyUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // post request to verify user, redirects to login page on invalid input
    $.post('/login', { username: username, password: password })
      .done((data) => {
        console.log('pushing to browse');
        browserHistory.push('/browse');
      })
      .fail(() => {
        browserHistory.push('/');
      })
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.verifyUser}>
          <div className="form-group">
            <label for="username">Username:</label>
            <input type="text" className="form-control" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" className="form-control" name="password" placeholder="password" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" />Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to="/signup" className="btn btn-primary">Signup</Link>
        </form>
      </div>
    );
  }
}

export default Login;
