import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Landing.css';

class Landing extends Component {
  render() {
    return(
      <div className="landingBody">
        <div className="landingContent">
          <div className="title-box">
            <h1 className="title"> Home Cookin' </h1>
          </div>

          <div className="signup-box">
            <div className="signup"><Link className="signup-link" to="/cookSignUp">Sign up as cook</Link></div>
            <div className="signup"><Link className="signup-link" to="/consumerSignUp">Sign up as user</Link></div>
          </div>
        </div>
        <div className="landingEmpty"></div>
      </div>

    )
  }
}

export default Landing;
