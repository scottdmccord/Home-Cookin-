import React, { Component } from 'react';

class CookDashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      cook: {},
    }
    this.displayCookDashboard = this.displayCookDashboard.bind(this);
  }

  displayCookDashboard(){
    let cookID = this.props.state.cookID
    fetch('/cooks/cookDashboard', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        cookID: cookID
      })
    })
      .then(r => r.json())
      .then((cook) => {
        this.setState({
          cook: cook
        })
      })
  }

  render() {
    return (
      <container>
        <h1> COOK DASHBOARD </h1>
        <button onClick={this.displayCookDashboard}> Get cook </button>

      {/*<h1>Name: {this.state.cook[0].name}</h1>*/}
      </container>
    )
  }
}

export default CookDashboard;
