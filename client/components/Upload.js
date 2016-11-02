import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
const cookieParser = require('cookie-parser');

class Upload extends Component {
  uploadItem(event) {
    event.preventDefault();
    const item = event.target.elements[0].value;
    const type = event.target.elements[1].value;
    const description = event.target.elements[2].value;
    const imageURL = event.target.elements[3].value;
    const dueDate = event.target.elements[4].value;
    const owneremail = event.target.elements[5].value;
    const ownerName = document.cookie.split('=').pop();

    $.post('/uploadItem',
      {
        itemname: item,
        itemtype: type,
        itemdescription: description,
        itempictureurl: imageURL,
        datedue: dueDate,
        ownername: ownerName,
        owneremail: owneremail
      })
      .done((data) => {
        browserHistory.push('/browse');
      })
      .fail((error) => console.log('Error with uploadItem:', error));
  }

  render() {
    return (
      <div className="upload-form">
        <form onSubmit={this.uploadItem}>
          <div className="form-group">
            <label for="item">Item:</label>
            <input type="text" className="form-control" name="item" placeholder="item" />
          </div>
          <div className="form-group">
            <label for="type">Type:</label>
            <select name="type" className="form-control">
              <option value="business">business</option>
              <option value="clothes">clothes</option>
              <option value="electronics">electronics</option>
              <option value="homegoods">home goods</option>
              <option value="music">music</option>
              <option value="sporting">sporting</option>
              <option value="transportation">transportation</option>
              <option value="unclassifiable">unclassifiable</option>
            </select>
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <textarea className="form-control" name="description" placeholder="description" />
          </div>
          <div className="form-group">
            <label for="imageURL">Image URL:</label>
            <input type="text" className="form-control" name="imageURL" placeholder="image URL" />
          </div>
          <div className="form-group">
            <label for="duedate">Due Date:</label>
            <input type="date" className="form-control" name="duedate" placeholder="due date" />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" name="email" placeholder="email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Upload;
