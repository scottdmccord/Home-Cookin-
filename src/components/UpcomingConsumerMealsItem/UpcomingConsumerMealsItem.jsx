import React, { Component } from 'react';

const UpcomingConsumerMealsItem = props => (
  <div className="UpcomingConsumerMealsItem">
    <h2> Upcoming meals </h2>
    <h4> Cuisine: {props.cuisine} </h4>
    <p> Description: {props.description} </p>
    <p> Price: {props.price} </p>
    <p> Pickup day: {props.pickup_day} </p>
    <p> Pickup time: {props.pickup_time} </p>
  </div>
)

export default UpcomingConsumerMealsItem;
