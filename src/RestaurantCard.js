import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function RestaurantCard({props}) {

  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    //console.log({props})
    //const id = props.id
    fetch(`http://localhost:9293/restaurants/${props.id}`)
    .then((r) => r.json())
    .then((restaurant) => console.log(restaurant))
  }, [])

  return <div>This is a Restaurant</div>

}

export default RestaurantCard
