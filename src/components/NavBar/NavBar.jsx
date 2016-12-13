import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './NavBar.css';


class NavBar extends Component {
  render() {
    return (
      <container>
        <div className="nav-bar">
          <div className="nav home"><Link className="nav-text" to="/" onlyActiveOnIndex={true}>Home</Link></div>
          <div className="nav login"><Link className="nav-text" to="/login">Login</Link></div>
          <div className="nav logout" onClick={this.props.logOut}><Link className="nav-text" to="/">Logout</Link></div>
          <div className="nav search"><Link className="nav-text" to="/search">Search</Link></div>
        </div>
      </container>
    )
  }
}

export default NavBar;
