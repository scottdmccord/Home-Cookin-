import React, { Component } from 'react';

class MealSearchItem extends Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div className="mealSearchItem">
        <h4>Cook: {this.props.cook}</h4>
        <p>Cuisine type: {this.props.cuisine}</p>
        <p>Ingredients: {this.props.ingredients}</p>
        <p>Description: {this.props.description}</p>
        <p>Numer left: {this.props.counter}</p>
        <button>Book meal!</button>
      </div>
    )
  }
}

export default MealSearchItem;


// const MealSearchItem = props => (
//   <div className="mealSearchItem">
//     <h4>Cook: {props.cook}</h4>
//     <p>Cuisine type: {props.cuisine}</p>
//     <p>Ingredients: {props.ingredients}</p>
//     <p>Description: {props.description}</p>
//     <p>Numer left: {props.counter}</p>
//     <button>Book meal!</button>
//   </div>
// )

// export default MealSearchItem;
