import React from 'react'
import img from '/home/sharon/Development/code/phase-3/foodie-review/src/restaurant.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'

function Restaurant({props}) {
  return (
    <div className='section-center'>
        <article key={props.id} className="menu-item">
        <img src={img} alt={props.name} className="photo"></img>
        <div className='item-info'>
        <header>
        <h4>{props.name}</h4>
        <h4 className="price">{props.price_range}</h4>
         </header>
         <p className="item-text">Cuisine: {props.cuisine}</p>
         <p className="item-text">Location: {props.location}</p>
        <div className='restaurant-link'>
         <Link to={`/restaurants/${props.id}`}>View Restaurant
         </Link>
        </div>
        </div>
        </article>
      
    </div>
  )
}

export default Restaurant
