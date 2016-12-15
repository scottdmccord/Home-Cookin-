import React, { Component } from 'react';

// CURRENTLY NOT IN USE
const CookSearchItem = props => (
  <div className="cookSearchItem">
    <h2>{props.name}</h2>
    <h4>{props.username}</h4>
    <h4>{props.neighborhood}</h4>
  </div>
)

export default CookSearchItem;
