import React, { useEffect, useState } from 'react'
import {FaEdit, FaTrash} from "react-icons/fa"
import img from '/home/sharon/Development/code/phase-3/foodie-review/src/restaurant.jpg'

function ReviewCard({items}) {
    const [restaurantReviews, setRestaurantReviews] = useState([])
const {id} = items
        useEffect(() => {
        fetch(`http://localhost:9293/restaurants/${id}`)
        .then((r) => r.json())
        .then((restaurantReviews) => setRestaurantReviews(restaurantReviews))
    }, [])


  return (
    <div className='section-center'>
        {restaurantReviews.map((restaurant) => {
        const { id, name, reviews} = restaurant;
        return (
            <article key={id} className="menu-item">
              <img src={img} alt={name} className="photo" />
        
              <div className="item-info">
                {reviews.map((review) => {
                    const {id, description, rating, user} = review; 
                    <><header>
                        <h4>{user[name]}</h4>
                        <h4 className="price">{rating}</h4>
                    </header><p className="item-text">{description}</p></>
        })}
    </div>
    </article>
          )
          } )}
    </div>
  )
}

export default ReviewCard
