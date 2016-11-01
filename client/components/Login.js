import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Login extends Component {

  verifyUser(event) {
    // need this
    event.preventDefault();

    // access username and password values
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;


    //////////////////////////////////
    // Post request to verify user
    // Redirects to login page on invalid input
    // Maybe create error page
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
      <div className="start-container">
        <h1>Lendr</h1>
        <br />
        <h3>share stuff with your friends.</h3>
        <br />
        <br />
        <form className="form-inline" onSubmit={this.verifyUser}>
          <div className="form-group">
            Username: <input type="text" className="form-control" name="username" placeholder="username" /><br />
          </div><br />
          <div className="form-group">
            Password: <input type="password" className="form-control" name="password" placeholder="password" /><br />
          </div><br />
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
