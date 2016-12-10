import React, { Component } from 'react';
import CookSearchItem from '../CookSearchItem/CookSearchItem.jsx';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      cooks: []
    }

    this.getCooks = this.getCooks.bind(this);
    this.renderCooks = this.renderCooks.bind(this);
  }


  getCooks(){
    console.log('grabbing all the cooks');
    fetch('/cooks/displayAll')
      .then(r => r.json())
      .then((cooks) => {
        this.setState({
          cooks: cooks
        })
        console.log(this.state.cooks);
      })
      .catch(error => console.log(error));
      this.renderCooks();
  }

    renderCooks() {
      return this.state.cooks.map((cook, i) =>
        <CookSearchItem
          key={i}
          name={cook.name}
          username={cook.username}
          neighborhood={cook.neighborhood}
        />
      );
    }

  render() {
    return (
      <container>
        <h1> SEARCH FOR THINGS! </h1>

        <button onClick={this.getCooks}>Get Cooks</button>

        <div className="cookContainer">
          {this.renderCooks()}
        </div>
      </container>
    )
  }
}

export default Search;
