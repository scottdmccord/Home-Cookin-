import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App/App';
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';
import ConsumerDashboard from './components/ConsumerDashboard/ConsumerDashboard';
import ConsumerSignUp from './components/ConsumerSignUp/ConsumerSignUp';
import ConsumerProfile from './components/consumerProfile/consumerProfile';
import CookDashboard from './components/CookDashboard/CookDashboard';
import CookProfile from './components/CookProfile/CookProfile';
import CookSignUp from './components/CookSignUp/CookSignUp';
import Login from './components/Login/Login';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// I followed the React Router tutorial to render different
// pages through my App: https://github.com/reactjs/react-router-tutorial

// mount our App at #container
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/login" component={Login}/>
      <Route path="/search" component={Search}/>
      <Route path="/consumerDashboard" component={ConsumerDashboard}/>
      <Route path="/consumerSignUp" component={ConsumerSignUp}/>
      <Route path="/consumerProfile" component={ConsumerProfile}/>
      <Route path="/cookDashboard" component={CookDashboard}/>
      <Route path="/cookSignUp" component={CookSignUp}/>
      <Route path="/cookProfile" component={CookProfile}/>
    </Route>
    <Route path='/app' component={actualApp} 
      <Route path='/blewyourmind' component={wholenewballgame}/>
    />
  </Router>
), document.querySelector('#container'));
