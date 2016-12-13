import React, { Component } from 'react';
import UpcomingMealItem from '../UpcomingMealItem/UpcomingMealItem';
import './UpcomingMeals.css';

const UpcomingMeals = (props) => {
  const meals = props.meals.length > 0 ?
    props.meals.map((meal, i) =>
      <UpcomingMealItem
        key={i}
        id={meal.id}
        cuisine={meal.cuisine_type}
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
    <div className="upcoming-meal-container">
      {meals}
    </div>
  )
}

export default UpcomingMeals;
