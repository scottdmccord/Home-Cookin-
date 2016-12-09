// import the libraries we need
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../Landing/Landing';

// create react component for App
export default class App extends React.Component{
  render(){
    return(
      <container>
        <h1> Placeholder for Nav </h1>

        {this.props.children}

      </container>
    )
  }
}
