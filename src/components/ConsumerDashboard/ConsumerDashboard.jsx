import React, { Component } from 'react';

class ConsumerDashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      meals: [],
      neighborhood: ''
    }
    this.hideModal = this.hideModal.bind(this);
    this.updateNeighborhood = this.updateNeighborhood.bind(this);
    this.searchMeals = this.searchMeals.bind(this);
  }

  componentDidMount() {
    this.hideModal();
  }

  hideModal() {
    if(this.props.state.consumerID !== '') {
      document.querySelector('.error-modal').style.display = 'none';
      document.querySelector('.dashboard-page').style.display = 'block';
    }
  }

  updateNeighborhood(e) {
    this.setState({
      neighborhood: e.target.value
    });
  }

  searchMeals() {
    fetch('/meals/searchNeighborhood', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        neighborhood: this.state.neighborhood
      })
    })
    .then(r => r.json())
    .then((meals) => {
      this.setState({
        meals: meals
      })
      console.log(this.state.meals);
    })
    .catch(err => console.log(err));
  }



  render() {
    return (
      <container>
      <div className="error-modal">Please log in as a consumer!</div>
      <div className="dashboard-page">
        <h1> CONSUMER DASHBOARD </h1>

        <div className="meal-search-container">
          <h3> Search for a meal </h3>
          <div className="meal-search-form">
            <label> Neighborhood: </label>
            <input
              className="neighborhood-search"
              type="text"
              placeholder="Enter neighborhood"
              value={this.state.neighborhood}
              onChange={this.updateNeighborhood}
            />

            <button onClick={this.searchMeals}>Search!</button>
          </div>
        </div>

      </div>
      </container>
    )
  }
}

export default ConsumerDashboard;
