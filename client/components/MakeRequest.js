import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
const cookieParser = require('cookie-parser');


class MakeRequest extends Component {
  constructor(props) {
    super(props)
    this.makeRequest = this.makeRequest.bind(this);
  }
  makeRequest(event) {
    event.preventDefault();
    console.log('this runs');
    const title = event.target.elements[0].value;
    const note = event.target.elements[1].value;
    const lendeename = document.cookie.split('=').pop();

    //  Post request to be saved to the database
    $.post('/makeRequest', { lendeename: lendeename, itemname: title, note: note })
      .done(data => {

        console.log(data);
        browserHistory.push('/userInfo')
      })
      .fail(() => console.error('error with makeRequest'));
  }

  render() {
    return (
      <div className="makeRequest-form">
        <form onSubmit={this.makeRequest}>
          <div className="form-group">
            <label for="title">Title:</label>
            <input type="text" className="form-control" name="title" placeholder="title" />
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <textarea className="form-control" name="description" placeholder="place a note here..." />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default MakeRequest;
