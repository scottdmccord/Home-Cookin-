import React, { Component } from 'react';

class MealSearchItem extends Component {
  constructor(props) {
    super();

    this.state = {
    }
    this.bookMeal = this.bookMeal.bind(this);
  }

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
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="mealSearchItem">
        <h4>Cook: {this.props.cook}</h4>
        <p>Cuisine type: {this.props.cuisine}</p>
        <p>Ingredients: {this.props.ingredients}</p>
        <p>Description: {this.props.description}</p>
        <p>Numer left: {this.props.counter}</p>
        <button onClick={this.bookMeal}>Book meal!</button>
      </div>
    )
  }
}

export default MealSearchItem;
