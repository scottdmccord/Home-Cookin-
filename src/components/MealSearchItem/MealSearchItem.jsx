import React, { Component } from 'react';

const MealSearchItem = props => (
  <div className="mealSearchItem">
    <h4>Cook: {props.cook}</h4>
    <p>Cuisine type: {props.cuisine}</p>
    <p>Ingredients: {props.ingredients}</p>
    <p>Description: {props.description}</p>
    <button>Book meal!</button>
  </div>
)

export default MealSearchItem;
