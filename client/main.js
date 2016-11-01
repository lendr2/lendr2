import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexLink } from 'react-router'

///////////////////////////////////
import {
  Lendr,
  Home,
  Start,
  Login,
  Signup,
  Feed,
  Browse,
  Requested,
  Account,
  UserInfo,
  Upload,
  MakeRequest,
  Wishlist,
  Karma
} from 'components';

//  React-router used to set up routes
render((
  <Router history={browserHistory}>
    <Route component={Lendr}>

      <Route path="/" component={Start}>
        <IndexRoute path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Route>

      <Route path="/home" component={Home}>
        <Route path="/browse" component={Browse} />
        <Route path="/requested" component={Requested} />
        <Route path="/account" component={Account} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))


      // <Route path="/feed" component={Feed}>
      // </Route>

      // <Route path="/account" component={Account}>
      // <Route path="/userInfo" component={UserInfo} />
      // <Route path="/upload" component={Upload} />
      // <Route path="/makeRequest" component={MakeRequest} />
      // <Route path="/wishlist" component={Wishlist} />