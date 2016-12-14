import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Landing from '../Landing/Landing';
import NavBar from '../NavBar/NavBar';
import './App.css';

// create react component for App
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      currentToken: '',
      cookID: '',
      consumerID: '',
    }

  }

  // store user's JWT in state
  updateCurrentToken(newToken) {
    this.setState({
      currentToken: newToken
    });
  }

  // if logged in, store cook user's id in state
  updateCookID(cookID) {
    this.setState({
      cookID: cookID
    });
  }

  // if logged in, store consumer user's id in state
  updateConsumerID(consumerID) {
    this.setState({
      consumerID: consumerID
    });
  }

  // log user out and reset global state
  logOut() {
    console.log('logging out');
    this.setState({
      currentToken: '',
      cookID: '',
      consumerID: ''
    })
  }

  render(){
    return(
      <container>
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif|Allura|Indie+Flower|Sanchez|Scada" rel="stylesheet"/>

        <div className="global-flex">

          <div className="navbar-flex">
            <NavBar
              logOut={() => this.logOut()}
            />
          </div>

            <div className="body-flex">

            {this.props.children && React.cloneElement(this.props.children, {
              state: this.state,
              updateCurrentToken: this.updateCurrentToken.bind(this),
              updateCookID: this.updateCookID.bind(this),
              updateConsumerID: this.updateConsumerID.bind(this)
            })}

            </div>

        </div>
      </container>
    )
  }
}

export default App;
