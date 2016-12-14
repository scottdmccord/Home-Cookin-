// import the libraries we need
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
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

  updateCurrentToken(newToken) {
    this.setState({
      currentToken: newToken
    });
  }

  updateCookID(cookID) {
    this.setState({
      cookID: cookID
    });
  }

  updateConsumerID(consumerID) {
    this.setState({
      consumerID: consumerID
    });
  }

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
