import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Router, Route, browserHistory } from 'react-router';

// I followed the React Router tutorial to render different
// pages through my App: https://github.com/reactjs/react-router-tutorial

// mount our App at #container
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.querySelector('#container'));
