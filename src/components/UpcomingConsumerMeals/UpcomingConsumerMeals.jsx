import React, { Component } from 'react';
import UpcomingConsumerMealsItem from '../UpcomingConsumerMealsItem/UpcomingConsumerMealsItem.jsx';

const UpcomingConsumerMeals = (props) => {
  const consumerMeals = props.meals.length > 0 ?
    props.meals.map((meal, i) =>
      <UpcomingConsumerMealsItem
        key={i}
        id={meal.id}
        cuisine={meal.cuisine_type}
        description={meal.description}
        price={meal.price}
        pickup_day={meal.pickup_day}
        pickup_time={meal.pickup_time}
        unbookMeal={props.unbookMeal}
      />
    )
    : <p> You have no upcoming meals </p>;
    return (
      <div className="upcoming-meal-container">
        {consumerMeals}
      </div>
    )
}




// class UpcomingConsumerMeals extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//     }

//     this.mapMeals = this.mapMeals.bind(this);

//   }

//   mapMeals(){
//     console.log('THIS IS WORKING');
//     if (props.meals.length > 0) {
//       props.meals.map((meal, i) =>
//           <UpcomingConsumerMealsItem
//             key={i}
//             cuisine={meal.cuisine_type}
//             description={meal.description}
//             price={meal.price}
//             pickup_day={meal.pickup_day}
//             pickup_time={meal.pickup_time}
//           />
//       )
//     } else {
//       <p> Nothing </p>
//     }

//   }

//   render(){
//     <div id="upcoming-consumer-meal-container">
//       {this.mapMeals}
//     </div>
//   }
// }

export default UpcomingConsumerMeals;
