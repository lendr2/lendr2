import React, { Component } from 'react';
import { Link } from 'react-router';

class Start extends Component {
  getStatus(){
    console.log('this happens');
    const bloodOath = new Promise((resolve, reject) => {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        resolve(response)
      })()
    }).then(response => {
      console.log(response)
    })
  }
  render() {

    return (
      <div className="start-container">
        <div className="start-contents">
          <h1>Lendr</h1>
          <h3>share stuff with your friends.</h3>
          <br />
          <br />
          <div className="fb-login-button" data-size="large" data-show-faces="false" data-auto-logout-link="true"></div>
          <Link to="/login" className="btn btn-primary start-btn">Login</Link>
          <Link to="/signup" className="btn btn-primary start-btn">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Start;
