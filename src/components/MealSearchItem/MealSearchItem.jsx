import React, { Component } from 'react';
require ('./MealSearchItem.css');

class MealSearchItem extends Component {
  constructor(props) {
    super();

    this.state = {
    }
    this.bookMeal = this.bookMeal.bind(this);
    this.cleanDate = this.cleanDate.bind(this);
  }

  // saves a meal to consumer's "upcoming meal" list
  bookMeal(){
    fetch('/meals/bookMeal', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ` + this.props.token,
      },
      method: 'POST',
      body: JSON.stringify({
        meal_id: this.props.id,
        consumer_id: this.props.consumerID
      })
    })
    .then(() => {this.props.getUpcomingMeals()})
    .catch(err => console.log(err));
  }

  cleanDate(x) {
    let y = x.slice(0, 10);
    return y;
  }

  render(){
    return(
      <div className="MealSearchItem">
        <h2 className="meal-heading"> Cook: {this.props.cook}</h2>
        <p className="row-odd">Cuisine type: {this.props.cuisine}</p>
        <p className="row-even">Ingredients: {this.props.ingredients}</p>
        <p className="row-odd">Description: {this.props.description}</p>
        <p className="row-even">Price: ${this.props.price}</p>
        <p className="row-odd">Pickup day: {this.cleanDate(this.props.pickup_day)}</p>
        <p className="row-even">Pickup time: {this.props.pickup_time}</p>
        <p className="row-end">Numer left: {this.props.counter}</p>
        <button onClick={this.bookMeal}>Book meal!</button>
      </div>
    )
  }
}

export default MealSearchItem;
