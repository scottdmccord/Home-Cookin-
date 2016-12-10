// import the libraries we need
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../Landing/Landing';
import NavBar from '../NavBar/NavBar';

// create react component for App
export default class App extends React.Component{
  constructor(props) {
    super();

    this.state = {
      currentToken: ''
    }

  }

  updateCurrentToken(newToken) {
    this.setState({
      currentToken: newToken
    });
  }

  logOut() {
    console.log('logging out');
    this.setState({
      currentToken: '',
    })
  }

  render(){
    return(
      <container>
        <NavBar
          logOut={() => this.logOut()}
        />

        {this.props.children && React.cloneElement(this.props.children, {
          state: this.state,
          updateCurrentToken: this.updateCurrentToken.bind(this)
        })}


      </container>
    )
  }
}
