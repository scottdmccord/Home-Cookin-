import React, { Component } from 'react';

function cleanDate(x) {
  let y = x.slice(0, 10);
  return y;
}

const UpcomingConsumerMealsItem = props => (
  <div className="UpcomingMealItem">
    <h2 className="meal-heading"> Cuisine: {props.cuisine} </h2>
    <p className="row-odd"> Description: {props.description} </p>
    <p className="row-even"> Price: ${props.price} </p>
    <p className="row-odd"> Pickup day: {cleanDate(props.pickup_day)} </p>
    <p className="row-end"> Pickup time: {props.pickup_time} </p>
    <button className="remove-meal-button" onClick={() => props.unbookMeal(props.id)}> Remove </button>
  </div>
)

export default UpcomingConsumerMealsItem;
