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
    : <h2> You have no upcoming meals </h2>;
    return (
      <div className="upcoming-meal-container">
        {consumerMeals}
      </div>
    )
}

export default UpcomingConsumerMeals;
