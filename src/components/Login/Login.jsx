import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      cookLogIn: {
        username: '',
        password: ''
      }
    }
  this.updateLogInUsername = this.updateLogInUsername.bind(this);
  this.updateLogInPassword = this.updateLogInPassword.bind(this);
  this.cooksLogin = this.cooksLogin.bind(this);
  }

    updateLogInUsername(e){
      console.log(e.target.value)
      this.setState({
        cookLogIn: {
          username: e.target.value,
          password: this.state.cookLogIn.password
        }
      });
    }

    updateLogInPassword(e){
      console.log(e.target.value)
      this.setState({
        cookLogIn: {
          username: this.state.cookLogIn.username,
          password: e.target.value
        }
      });
    }


    cooksLogin() {
      console.log('posting the login!');
      fetch('/cooks/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.cookLogIn.username,
          password: this.state.cookLogIn.password
        })
      })
      .then(r => r.json())
      .then((data) => {
          this.props.updateCurrentToken(data);
        this.setState({
          cookLogIn: {
            username: '',
            password: ''
          }
        }, () => {
          console.log(this.state)
        })
      })
    }

  render() {
    return(
      <container>
        <h1> COOK LOGIN </h1>


          <div className="login-username-div">
            <label> Username: </label>
            <input
              className="login username"
              type="text"
              placeholder="Enter Username"
              value={this.state.cookLogIn.username}
              onChange={this.updateLogInUsername}
            />
          </div>

          <div className="login-password-div">
            <label> Password: </label>
            <input
              className="login password"
              type="text"
              placeholder="Enter Password"
              value={this.state.cookLogIn.password}
              onChange={this.updateLogInPassword}
            />
          </div>

          <button onClick={this.cooksLogin}>Enter</button>

        <h1> CONSUMER LOGIN </h1>
      </container>
    )
  }
}

export default Login;
