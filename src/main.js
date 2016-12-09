import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App/App';
import Landing from './components/Landing/Landing';
import ConsumerSignUp from './components/ConsumerSignUp/ConsumerSignUp'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// I followed the React Router tutorial to render different
// pages through my App: https://github.com/reactjs/react-router-tutorial

// mount our App at #container
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/consumerSignUp" component={ConsumerSignUp}/>
    </Route>
  </Router>
), document.querySelector('#container'));
