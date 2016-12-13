import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Landing.css';

class Landing extends Component {
  render() {
    return(
      <div className="landingBody">

        <div className="title-box">
          <h1 className="title"> Home Cookin' </h1>
        </div>

        <div className="signup-box">
          <div className="cook signup"><Link className="signup-link" to="/cookSignUp">Sign up as cook</Link></div>
          <div className="consumer signup"><Link className="signup-link" to="/consumerSignUp">Sign up as consumer</Link></div>
        </div>
      </div>
    )
  }
}

export default Landing;
