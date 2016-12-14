import React, { Component } from 'react';
import './UpcomingMealItem.css';

function cleanDate(x) {
  let y = x.slice(0, 10)
  // return x.toDateString();
  console.log(typeof x)
  return y
}


const UpcomingMealItem = props => (
  <div className="upcomingMealItem">
    <h2 className="meal-heading"> Cuisine: {props.cuisine} </h2>
    <p className="row-odd"> Ingredients: {props.ingredients} </p>
    <p className="row-even"> Description: {props.description} </p>
    <p className="row-odd"> Quantity: {props.quantity} </p>
    <p className="row-even"> Pickup day: {cleanDate(props.pickup_day)} </p>
    <p className="row-odd"> Pickup time: {props.pickup_time} </p>
    <p className="row-end"> Price: {props.price} </p>
  </div>
)

export default UpcomingMealItem;
