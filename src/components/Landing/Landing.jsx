import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Landing.css';

class Landing extends Component {
  render() {
    return(
      <div>
        <div className="cook signup"><Link to="/cookSignUp">Sign up as cook</Link></div>
        <div className="consumer signup"><Link to="/consumerSignUp">Sign up as consumer</Link></div>
      </div>
    )
  }
}

export default Landing;
