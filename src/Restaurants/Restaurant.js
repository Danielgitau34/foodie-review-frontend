import React from 'react'
import img from '/home/sharon/Development/code/phase-3/foodie-review/src/restaurant.jpg'
import { BrowserRouter, Link } from 'react-router-dom'

function Restaurant({ name, id, price_range, cuisine, location, ...props}) {
  return (
    <div className='section-center'>
        <article key={id} className="menu-item">
        <img src={img} alt={name} className="photo"></img>
        <div className='item-info'>
        <header>
        <h4>{name}</h4>
        <h4 className="price">{price_range}</h4>
         </header>
         <p className="item-text">Cuisine: {cuisine}</p>
         <p className="item-text">Location: {location}</p>
        <div className='restaurant-link'>
         <Link to={`/restaurants/${id}`}>View Restaurant</Link>
        </div>
        </div>
        </article>
      
    </div>
  )
}

export default Restaurant
