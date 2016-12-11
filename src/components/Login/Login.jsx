import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      cookLogIn: {
        username: '',
        password: ''
      },
      consumerLogIn: {
        username: '',
        password: ''
      }
    }

  this.updateCookLogInUsername = this.updateCookLogInUsername.bind(this);
  this.updateCookLogInPassword = this.updateCookLogInPassword.bind(this);
  this.cooksLogin = this.cooksLogin.bind(this);
  this.updateConsumerLogInUsername = this.updateConsumerLogInUsername.bind(this);
  this.updateConsumerLogInPassword = this.updateConsumerLogInPassword.bind(this);
  this.consumersLogin = this.consumersLogin.bind(this);

  }


    // COOKS login and authorization
    updateCookLogInUsername(e){
      console.log(e.target.value)
      this.setState({
        cookLogIn: {
          username: e.target.value,
          password: this.state.cookLogIn.password
        }
      });
    }

    updateCookLogInPassword(e){
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
        this.props.updateCurrentToken(data.token);
        this.props.updateCookID(data.id);
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

    // CONSUMERS login and authorization
    updateConsumerLogInUsername(e) {
      console.log(e.target.value)
      this.setState({
        consumerLogIn: {
          username: e.target.value,
          password: this.state.consumerLogIn.password
        }
      });
    }

    updateConsumerLogInPassword(e) {
      console.log(e.target.value);
      this.setState({
        consumerLogIn: {
          username: this.state.consumerLogIn.username,
          password: e.target.value
        }
      });
    }

    consumersLogin() {
      console.log('posting the consumer login!');
      fetch('/consumers/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.consumerLogIn.username,
          password: this.state.consumerLogIn.password
        })
      })
      .then(r => r.json())
      .then((data) => {
        this.props.updateCurrentToken(data);
        this.setState({
          consumerLogIn: {
            username: '',
            password: ''
          }
        }, () => {
          console.log(this.state);
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
              onChange={this.updateCookLogInUsername}
            />
          </div>

          <div className="login-password-div">
            <label> Password: </label>
            <input
              className="login password"
              type="text"
              placeholder="Enter Password"
              value={this.state.cookLogIn.password}
              onChange={this.updateCookLogInPassword}
            />
          </div>

          <button onClick={this.cooksLogin}>Enter</button>
          <button><Link to="cookDashboard">Go to dashboard</Link></button>

        <h1> CONSUMER LOGIN </h1>

        <div className="login-username-div">
          <label> Username: </label>
          <input
            className="login username"
            type="text"
            placeholder="Enter Username"
            value={this.state.consumerLogIn.username}
            onChange={this.updateConsumerLogInUsername}
          />
        </div>

        <div className="login-password-div">
          <label> Password: </label>
          <input
            className="login password"
            type="text"
            placeholder="Enter Password"
            value={this.state.consumerLogIn.password}
            onChange={this.updateConsumerLogInPassword}
          />
        </div>

        <button onClick={this.consumersLogin}>Enter</button>

      </container>
    )
  }
}

export default Login;
