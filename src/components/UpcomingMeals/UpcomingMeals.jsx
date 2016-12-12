import React, { Component } from 'react';
import UpcomingMealItem from '../UpcomingMealItem/UpcomingMealItem';

const UpcomingMeals = (props) => {
  const meals = props.meals.length > 0 ?
    props.meals.map((meal, i) =>
      <UpcomingMealItem
        key={i}
        cuisine={meal.cusine_type}
        ingredients={meal.ingredients}
        description={meal.description}
        quantity={meal.quantity}
        pickup_day={meal.pickup_day}
        pickup_time={meal.pickup_time}
        price={meal.price}
      />
    )
    : <p>you have no meals</p>;
  return (
    <div id="upcoming-meal-container">
      {meals}
    </div>
  )
}

export default UpcomingMeals;
