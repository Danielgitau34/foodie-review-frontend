import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'

function Restaurants() {
 const [restaurants, setRestaurants] = useState([])

 useEffect(() => {
    fetch("http://localhost:9293/restaurants")
    .then((r) => r.json())
    .then((restaurants) => setRestaurants(restaurants))
 }, [restaurants.length])

 const grid = restaurants.map( item => {
    //const { id, name, image, cuisine, price_range, location, website } = item;
    return (
    <Restaurant 
    key={item.id}
    props = {item}
    />
    )})

  return (
    <div className='home'>
    <div className='header'>
    <h1>Nairobi Foodie Review</h1>
    <div className='subheader'>Honest, unbiased restaurant reviews</div>
    </div>
    <div className='grid'>
      {grid}
    </div>
    </div>
  )
}

export default Restaurants;
