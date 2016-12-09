import React, { Component } from 'react';

class ConsumerSignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      consumerSignUpName: '',
      consumerSignUpEmail: '',
      consumerSignUpUsername: '',
      consumerSignUpPassword: ''
    }

    this.updateSignUpName = this.updateSignUpName.bind(this);
    this.updateSignUpEmail = this.updateSignUpEmail.bind(this);
    this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
    this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
    this.handleConsumerCreation = this.handleConsumerCreation.bind(this);
  }

  updateSignUpName(e) {
    console.log(e.target.value)
    this.setState({
      consumerSignUpName: e.target.value
    });
  };

  updateSignUpEmail(e) {
    console.log(e.target.value)
    this.setState({
      consumerSignUpEmail: e.target.value
    });
  };

  updateSignUpUsername(e) {
    console.log(e.target.value)
    this.setState({
      consumerSignUpUsername: e.target.value
    });
  };

  updateSignUpPassword(e) {
    console.log(e.target.value)
    this.setState({
      consumerSignUpPassword: e.target.value
    });
  };

  handleConsumerCreation() {
    console.log('starting fetch');
    fetch('/consumers', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.consumerSignUpName,
        email: this.state.consumerSignUpEmail,
        username: this.state.consumerSignUpUsername,
        password: this.state.consumerSignUpPassword
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <container>
        <h1> CONSUMER SIGN UP </h1>

        <div className="signup-container">

          <div className="signup-name-div">
            <label> Name: </label>
            <input
              className="signup name"
              type="text"
              placeholder="Enter Name"
              value={this.state.consumerSignUpName}
              onChange={this.updateSignUpName}
            />
          </div>

          <div className="signup-email-div">
            <label> Email: </label>
            <input
              className="signup email"
              type="text"
              placeholder="Enter email"
              value={this.state.consumerSignUpEmail}
              onChange={this.updateSignUpEmail}
            />
          </div>

          <div className="signup-username-div">
            <label> Username: </label>
            <input
              className="signup username"
              type="text"
              placeholder="Enter username"
              value={this.state.consumerSignUpUsername}
              onChange={this.updateSignUpUsername}
            />
          </div>

          <div className="signup-password-div">
            <label> Password: </label>
            <input
              className="signup password"
              type="text"
              placeholder="Enter password"
              value={this.state.consumerSignUpPassword}
              onChange={this.updateSignUpPassword}
            />
          </div>

          <button onClick={this.handleConsumerCreation}>Sign Up</button>

        </div>



      </container>
    )
  }
}

export default ConsumerSignUp;
