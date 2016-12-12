import React, { Component } from 'react';

function cleanDate(x) {
  let y = x.replace('T05:00:00.000Z', '')
  // return x.toDateString();
  console.log(typeof x)
  return y
}


const UpcomingMealItem = props => (
  <div className="upcomingMealItem">
    <h4> Cuisine: {props.cuisine} </h4>
    <p> Ingredients: {props.ingredients} </p>
    <p> Description: {props.description} </p>
    <p> Quantity: {props.quantity} </p>
    <p> Pickup day: {cleanDate(props.pickup_day)} </p>
    <p> Pickup time: {props.pickup_time} </p>
    <p> Price: {props.price} </p>
  </div>
)

export default UpcomingMealItem;
