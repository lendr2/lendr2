import React from 'react';
import { Link } from 'react-router';

const Signup = ({createUser}) => {
  return (
    <div className="signup-form">
      <form onSubmit={createUser}>
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

export default Signup;
