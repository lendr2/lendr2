import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Start extends Component {
  verifyUser(event) {
    console.log('verifying');
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // post request to verify user, redirects to login page on invalid input
    $.post('/login', { username: username, password: password })
      .done((data) => {
        browserHistory.push('/home');
      })
      .fail(() => {
        browserHistory.push('/');
      })
  }

  createUser(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const location = event.target.elements[3].value + ', ' + event.target.elements[4].value;

    // post request to create new user, redirects to signup page for invalid inputs
    $.post('/signup', { username: username, password: password, email: email, location: location, karma: 0 })
      .done((data) => {
        browserHistory.push('/login');

      })
      .fail(() => {
        browserHistory.push('/signup');
      })
  }

  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        verifyUser: this.verifyUser,
        createUser: this.createUser
      })
    });

    return (
      <div className="start">
        <h1>Lendr</h1>
        <h4>share stuff with your friends</h4>
        {children}
      </div>
    );
  }
}

export default Start;
