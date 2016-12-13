import React, { Component } from 'react';
import './CookSignUp.css';

class CookSignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      cookSignUpName: '',
      cookSignUpEmail: '',
      cookSignUpUsername: '',
      cookSignUpPassword: '',
      cookSignUpNeighborhood: '',
      cookSignUpAddress: ''
    }

    this.updateSignUpName = this.updateSignUpName.bind(this);
    this.updateSignUpEmail = this.updateSignUpEmail.bind(this);
    this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
    this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
    this.updateSignUpNeighborhood = this.updateSignUpNeighborhood.bind(this);
    this.updateSignUpAddress = this.updateSignUpAddress.bind(this);
    this.handleCookCreation = this.handleCookCreation.bind(this);
  }

  updateSignUpName(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpName: e.target.value
    });
  };

  updateSignUpEmail(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpEmail: e.target.value
    });
  };

  updateSignUpUsername(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpUsername: e.target.value
    });
  };

  updateSignUpPassword(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpPassword: e.target.value
    });
  };

  updateSignUpAddress(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpAddress: e.target.value
    });
  };

  updateSignUpNeighborhood(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpNeighborhood: e.target.value
    });
  };


  handleCookCreation() {
    console.log('starting fetch');
    fetch('/cooks', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.cookSignUpName,
        email: this.state.cookSignUpEmail,
        username: this.state.cookSignUpUsername,
        password: this.state.cookSignUpPassword,
        neighborhood: this.state.cookSignUpNeighborhood,
        address: this.state.cookSignUpAddress
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <container className="cook-signup-page">

        <div className="signup-content">
        <h1> COOK SIGN UP </h1>

        <div className="signup-container">

          <div className="signup-name-div">
            <label> Name: </label>
            <input
              className="signup-input name"
              type="text"
              placeholder="Enter Name"
              value={this.state.cookSignUpName}
              onChange={this.updateSignUpName}
            />
          </div>

          <div className="signup-address-div">
            <label> Address: </label>
            <input
              className="signup-input address"
              type="text"
              placeholder="Enter address"
              value={this.state.cookSignUpAddress}
              onChange={this.updateSignUpAddress}
            />
          </div>

          <div className="signup-neighborhood-div">
            <label> Neighborhood: </label>
            <input
              className="signup-input neighborhood"
              type="text"
              placeholder="Enter Neighborhood"
              value={this.state.cookSignUpNeighborhood}
              onChange={this.updateSignUpNeighborhood}
            />
          </div>

          <div className="signup-email-div">
            <label> Email: </label>
            <input
              className="signup-input email"
              type="text"
              placeholder="Enter Email"
              value={this.state.cookSignUpEmail}
              onChange={this.updateSignUpEmail}
            />
          </div>

          <div className="signup-username-div">
            <label> Username: </label>
            <input
              className="signup-input username"
              type="text"
              placeholder="Enter Username"
              value={this.state.cookSignUpUsername}
              onChange={this.updateSignUpUsername}
            />
          </div>

          <div className="signup-password-div">
            <label> Password: </label>
            <input
              className="signup-input password"
              type="text"
              placeholder="Enter Password"
              value={this.state.cookSignUpPassword}
              onChange={this.updateSignUpPassword}
            />
          </div>

          <button onClick={this.handleCookCreation}>Sign Up</button>

        </div>
        </div>

        <div className="signup-photo-div">
        </div>

      </container>
    )
  }
}

export default CookSignUp;
