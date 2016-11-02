import React from 'react';
import { Link } from 'react-router';

const Login = ({verifyUser}) => {
  return (
    <div className="login-form">
      <form onSubmit={verifyUser}>
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

export default Login;
