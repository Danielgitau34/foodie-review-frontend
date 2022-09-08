import React from 'react'
import img from '/home/sharon/Development/code/phase-3/foodie-review/src/restaurant.jpg'
import { BrowserRouter, Link } from 'react-router-dom'

function Restaurant({props}) {
  return (
    <div className='card'>
        <div className='restaurant-image'>
            <img src={img} alt={props.name}></img>
        </div>
        <div className='restaurant-name'>{props.name}</div>
        <div className='restaurant-rating'>{props.price_range}</div>
        <div className='restaurant-link'>
            <Link to={`/restaurants/${props.id}`}>View Restaurant</Link>
        </div>
      
    </div>
  )
}

export default Restaurant
