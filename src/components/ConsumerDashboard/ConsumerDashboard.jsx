import React, { Component } from 'react';
import MealSearchItem from '../MealSearchItem/MealSearchItem.jsx';
import UpcomingConsumerMeals from '../UpcomingConsumerMeals/UpcomingConsumerMeals.jsx';
import './ConsumerDashboard.css'

class ConsumerDashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      consumer: [],
      meals: [],
      neighborhood: '',
      upcomingMeals: []
    }
    this.hideModal = this.hideModal.bind(this);
    this.updateNeighborhood = this.updateNeighborhood.bind(this);
    this.searchMeals = this.searchMeals.bind(this);
    this.renderMeals = this.renderMeals.bind(this);
    this.displayConsumerDashboard = this.displayConsumerDashboard.bind(this);
    this.getUpcomingConsumerMeals = this.getUpcomingConsumerMeals.bind(this);
    this.unbookMeal = this.unbookMeal.bind(this);
  }

  componentDidMount() {
    this.hideModal();
    this.getUpcomingConsumerMeals();
    this.displayConsumerDashboard();
  }

  hideModal() {
    if(this.props.state.consumerID !== '') {
      document.querySelector('.error-modal').style.display = 'none';
      document.querySelector('.dashboard-page').style.display = 'block';
    }
  }

  displayConsumerDashboard(){
    let consumerID = this.props.state.consumerID;
    fetch('/consumers/consumerDashboard', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        consumerID: consumerID
      })
    })
    .then(r => r.json())
    .then((consumer) => {
      this.setState({
        consumer: consumer
      })
    })
    .then(() => {
      console.log('consumer object: ', this.props.state.consumerID)
    })
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
    this.renderMeals();
  }

  renderMeals() {
    return this.state.meals.map((meal, i) =>
      <MealSearchItem
        key={i}
        cook={meal.name}
        cuisine={meal.cuisine_type}
        ingredients={meal.ingredients}
        description={meal.description}
        counter={meal.counter}
        id={meal.id}
        pickup_time={meal.pickup_time}
        pickup_day={meal.pickup_day}
        token={this.props.state.currentToken}
        consumerID={this.props.state.consumerID}
      />
    );
  }

  getUpcomingConsumerMeals() {
    fetch('/meals/renderConsumerMealsUpcoming', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        consumerID: this.props.state.consumerID
      })
    })
    .then(r => r.json())
    .then((meals) => {
      console.log('meals', meals)
      this.setState({
        upcomingMeals: meals
      })
      console.log(this.state.upcomingMeals)
    })
    .catch(err => console.log(err));
  }

  unbookMeal(id) {
    fetch(`/meals/unbookMeal/${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'delete'
    })
    .then(() => {
      console.log('unbooked meal');
      // let meals = this.state.upcomingMeals.filter((meal) => {
      //   return meal.id !== id;
      // });
      // this.setSate({ meals })
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

        <h2> Meal Search </h2>
        <div className="meal-search-items">
          {this.renderMeals()}
        </div>

        <UpcomingConsumerMeals
          meals={this.state.upcomingMeals}
          unbookMeal={this.unbookMeal}
        />

      </div>
      </container>
    )
  }
}

export default ConsumerDashboard;
