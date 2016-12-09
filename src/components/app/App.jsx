// import the libraries we need
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../Landing/Landing';
import NavBar from '../NavBar/NavBar';

// create react component for App
export default class App extends React.Component{
  render(){
    return(
      <container>
        <NavBar />

        {this.props.children}


      </container>
    )
  }
}
