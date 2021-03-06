import React, { Component } from 'react';
import MealSearchItem from '../MealSearchItem/MealSearchItem.jsx';
import UpcomingConsumerMeals from '../UpcomingConsumerMeals/UpcomingConsumerMeals.jsx';
import './ConsumerDashboard.css'

class ConsumerDashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      consumer: {name: "n/a"},
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

  // hide the error modal if consumer is logged in
  hideModal() {
    if(this.props.state.consumerID !== '') {
      document.querySelector('.error-modal').style.display = 'none';
      document.querySelector('.dashboard-page').style.display = 'block';
    }
  }

  // fetch consumer user's information and save it to state
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
        consumer: consumer[0]
      })
    })
    .then(() => {
      console.log('consumer object: ', this.props.state.consumerID)
    })
  }

  // put neighborhood query to state
  updateNeighborhood(e) {
    this.setState({
      neighborhood: e.target.value
    });
  }

  // search for meals in queried neighborhood and return them to state
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

  // display queried meals on the stage
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
        price={meal.price}
        token={this.props.state.currentToken}
        consumerID={this.props.state.consumerID}
        getUpcomingMeals={this.getUpcomingConsumerMeals}
      />
    );
  }

  // render upcoming "booked" meals to page
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

  // remove a meal from "booked" list
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
    .then(() => this.getUpcomingConsumerMeals())
    .catch(err => console.log(err));
  }


  render() {
    return (
      <container>

        <div className="error-modal"><h1>Please log in as a consumer!</h1></div>

        <div className="dashboard-page">
          <div className="dashboard-header">
            <h1> Welcome, {this.state.consumer.name}. What do you feel like eating today? </h1>
          </div>
          <div className="dashboard-body">

            <div className="dashboard-column1">
              <h1> Search for a meal </h1>
              <div className="dashboard-form-holder">
                <div className="dashboard-form-input">
                  <label> Neighborhood: </label>
                  <input
                    className="neighborhood-search"
                    type="text"
                    placeholder="Enter neighborhood"
                    value={this.state.neighborhood}
                    onChange={this.updateNeighborhood}
                  />
                </div>
                <button className="dashboard-submit" onClick={this.searchMeals}>Search!</button>
              </div>
            </div>

            <div className="dashboard-column2">
              <h1> Search Results </h1>
              <div className="meal-search-items">
                {this.renderMeals()}
              </div>
            </div>

            <div className="dashboard-column3-user">
              <h1> Upcoming Meals </h1>
              <UpcomingConsumerMeals
                meals={this.state.upcomingMeals}
                unbookMeal={this.unbookMeal}
              />
            </div>

          </div>
        </div>

      </container>
    )
  }
}

export default ConsumerDashboard;
