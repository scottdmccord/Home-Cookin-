import React, { Component } from 'react';

const UpcomingMealItem = props => (
  <div className="upcomingMealItem">
    <h4> Cuisine: {props.cuisine} </h4>
    <p> Ingredients: {props.ingredients} </p>
    <p> Description: {props.description} </p>
    <p> Quantity: {props.quantity} </p>
    <p> Pickup day: {props.pickup_day} </p>
    <p> Pickup time: {props.pickup_time} </p>
    <p> Price: {props.price} </p>
  </div>
)

export default UpcomingMealItem;
