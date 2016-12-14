import React, { Component } from 'react';
import './ConsumerSignUp.css'

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

  // update sign up information
  updateSignUpName(e) {
    this.setState({
      consumerSignUpName: e.target.value
    });
  };

  updateSignUpEmail(e) {
    this.setState({
      consumerSignUpEmail: e.target.value
    });
  };

  updateSignUpUsername(e) {
    this.setState({
      consumerSignUpUsername: e.target.value
    });
  };

  updateSignUpPassword(e) {
    this.setState({
      consumerSignUpPassword: e.target.value
    });
  };

  // submit user creation information
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
    .then(() => {
      this.setState({
        consumerSignUpName: '',
        consumerSignUpEmail: '',
        consumerSignUpUsername: '',
        consumerSignUpPassword: ''
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <container className="signup-page">

        <div className="signup-photo-div-consumer">
          {/*photo by christopher baker,
          http://www.realsimple.com/food-recipes/recipe-collections-favorites/quick-easy/fast-dinner-recipes-0*/}
        </div>

        <div className="signup-content">

          <div className="cook-signup-header">
            <h1 className="signup-title"> USER SIGN UP </h1>
          </div>

          <div className="signup-container-consumer">
            <div className="signup-second-container-consumer">

              <div className="signup-input-div">
                <label> Name: </label>
                <input
                  className="signup-input name"
                  type="text"
                  placeholder="Enter Name"
                  value={this.state.consumerSignUpName}
                  onChange={this.updateSignUpName}
                />
              </div>

              <div className="signup-input-div">
                <label> Email: </label>
                <input
                  className="signup-input email"
                  type="text"
                  placeholder="Enter email"
                  value={this.state.consumerSignUpEmail}
                  onChange={this.updateSignUpEmail}
                />
              </div>

              <div className="signup-input-div">
                <label> Username: </label>
                <input
                  className="signup-input username"
                  type="text"
                  placeholder="Enter username"
                  value={this.state.consumerSignUpUsername}
                  onChange={this.updateSignUpUsername}
                />
              </div>

              <div className="signup-input-div">
                <label> Password: </label>
                <input
                  className="signup-input password"
                  type="text"
                  placeholder="Enter password"
                  value={this.state.consumerSignUpPassword}
                  onChange={this.updateSignUpPassword}
                />
              </div>

            <div className="button-container">
              <button onClick={this.handleConsumerCreation}>Sign Up</button>
            </div>

          </div>
        </div>

      </div>

      </container>
    )
  }
}

export default ConsumerSignUp;
