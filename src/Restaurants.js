import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import RestaurantCard from './RestaurantCard'
import logo from "/home/sharon/Development/code/phase-3/foodie-review/src/logo.jpeg"

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
    <><Restaurant
            key={item.id}
            props={item} /><RestaurantCard key={item.id} props={item}/></>
    )})

  return (
    <div>
        <main>
            <section className='restaurant section'>
             <div className='title'>
             <img src={logo} alt="logo" className='logo'/>
                <h2>Nairobi Foodie Review</h2>
                <div className='subheader'>Honest, unbiased restaurant reviews</div>
                <div className='underline'></div>
            </div>
                 <div className='grid'>
                      {grid}
                 </div>
             </section>
         </main>
    </div>
  )
}

export default Restaurants;
