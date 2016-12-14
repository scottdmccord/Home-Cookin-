import React, { Component } from 'react';
import './CookDashboard.css';
import UpcomingMeals from '../UpcomingMeals/UpcomingMeals.jsx';

class CookDashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      upcomingMeals: [],
      cook: {name: "n/a"},
      inputCuisineType: '',
      inputIngredients: '',
      inputDescription: '',
      inputQuantity: '',
      inputPickupDay: '',
      inputPickupTime: '',
      inputPrice: ''
    }
    this.displayCookDashboard = this.displayCookDashboard.bind(this);
    this.updateCuisineType = this.updateCuisineType.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updatePickupDay = this.updatePickupDay.bind(this);
    this.updatePickupTime = this.updatePickupTime.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.createMeal = this.createMeal.bind(this);
    this.hideDashboard = this.hideDashboard.bind(this);
    this.getUpcomingMeals = this.getUpcomingMeals.bind(this);
  }

  componentDidMount() {
    console.log('Mounting now');
    this.displayCookDashboard();
    this.getUpcomingMeals();
    this.hideDashboard();
    console.log('TEST: ', this.state.cook);
  }

  hideDashboard() {
    if(this.props.state.cookID !== '') {
      document.querySelector('.error-modal').style.display = 'none';
      document.querySelector('.dashboard-page').style.display = 'block';
    }
  }

  displayCookDashboard(){
    console.log('current token: ', this.props.state.currentToken);
    let cookID = this.props.state.cookID;
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
          cook: cook[0],
          cookName: cook[0].name,
        })
      })
      .then(() => {
        console.log('cook object: ', this.state.cook)
      })
  }

  updateCuisineType(e) {
    this.setState({
      inputCuisineType: e.target.value
    })
  }

  updateIngredients(e) {
    this.setState({
      inputIngredients: e.target.value
    })
  }

  updateDescription(e) {
    this.setState({
      inputDescription: e.target.value
    })
  }

  updateQuantity(e) {
    this.setState({
      inputQuantity: e.target.value
    })
  }

  updatePickupDay(e) {
    this.setState({
      inputPickupDay: e.target.value
    })
  }

  updatePickupTime(e) {
    this.setState({
      inputPickupTime: e.target.value
    })
  }

  updatePrice(e) {
    this.setState({
      inputPrice: e.target.value
    })
  }

  createMeal() {
    fetch('/meals', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken,
      },
      method: 'POST',
      body: JSON.stringify({
        cuisine_type: this.state.inputCuisineType,
        ingredients: this.state.inputIngredients,
        description: this.state.inputDescription,
        quantity: this.state.inputQuantity,
        pickup_day: this.state.inputPickupDay,
        pickup_time: this.state.inputPickupTime,
        price: this.state.inputPrice,
        cook_id: this.props.state.cookID
      })
    })
    .then(() => {
      this.setState({
        inputCuisineType: '',
        inputIngredients: '',
        inputDescription: '',
        inputQuantity: '',
        inputPickupDay: '',
        inputPickupTime: '',
        inputPrice: ''
      })
    })
    .catch(err => console.log(err));
  }

  getUpcomingMeals(){
    fetch('/meals/renderCookMealsUpcoming', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.state.currentToken
      },
      method: 'POST',
      body: JSON.stringify({
        cookID: this.props.state.cookID
      })
    })
    .then(r => r.json())
    .then((meals) => {
      console.log('meals', meals)
      this.setState({
        upcomingMeals: meals
      })
      console.log(this.state.upcomingMeals);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <container>

        <div className="error-modal"><h1>Please log in as a cook!</h1></div>
        <div className="dashboard-page">

        <div className="dashboard-header">
          <h1 className="dashboard-header-text"> Welcome, {this.state.cook.name}. What are you cooking today?</h1>
        </div>

        <div  className="dashboard-body">

          <div className="dashboard-column1">

            <h1> Make a Meal </h1>

            <div className="dashboard-form-holder">

            <div className="dashboard-form-input">
            <label className="dashboard-label">Cuisine Type: </label>

            <input
              className="cuisine-input"
              type="text"
              placeholder="Enter cuisine type"
              value={this.state.inputCuisineType}
              onChange={this.updateCuisineType}
            />
            </div>

            <div className="dashboard-form-input">
            <label className="dashboard-label">Ingredients: </label>

            <input
              className="ingredients-input"
              type="text"
              placeholder="Enter ingredients"
              value={this.state.inputIngredients}
              onChange={this.updateIngredients}
            />
            </div>

            <div className="dashboard-form-input">
            <label className="dashboard-label">Description: </label>

            <input
              className="description-input"
              type="text"
              placeholder="Enter description"
              value={this.state.inputDescription}
              onChange={this.updateDescription}
            />
            </div>

            <div className="dashboard-form-input">
            <label className="dashboard-label">Number of meals: </label>

            <input
              className="quantity-input"
              type="text"
              placeholder="Enter quantity"
              value={this.state.inputQuantity}
              onChange={this.updateQuantity}
            />
            </div>


            <div className="dashboard-form-input">
            <label className="dashboard-label">Pickup day: </label>

            <input
              className="pickupDay-input"
              type="text"
              placeholder="Enter pickup day"
              value={this.state.inputPickupDay}
              onChange={this.updatePickupDay}
            />
            </div>

            <div className="dashboard-form-input">
            <label className="dashboard-label">Pickup time: </label>

            <input
              className="pickupTime-input"
              type="text"
              placeholder="Enter pickup time"
              value={this.state.inputPickupTime}
              onChange={this.updatePickupTime}
            />
            </div>

            <div className="dashboard-form-input">
            <label className="dashboard-label">Price: </label>

            <input
              className="price-input"
              type="text"
              placeholder="Enter price"
              value={this.state.inputPrice}
              onChange={this.updatePrice}
            />
            </div>

            <button className="dashboard-submit" onClick={this.createMeal}> Submit! </button>
            </div>

            </div>

            <div className="dashboard-column2">

                <h1> Upcoming Meals </h1>

              <UpcomingMeals meals={this.state.upcomingMeals}/>
            </div>

            <div className="dashboard-column3"> <h1>Past Meals - feature coming soon</h1></div>

          </div>




        </div>


      </container>
    )
  }
}

export default CookDashboard;
