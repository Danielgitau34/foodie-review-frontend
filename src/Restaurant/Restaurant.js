import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Restaurant(props) {
  //const [restaurants, setRestaurants] = useState([])
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState([])

  let { id } = useParams();
  console.log("This is my id", id)
  

  useEffect(() => {
   
    fetch(`http://localhost:9293/restaurants/${id}`)
     .then((r) => r.json())
    .then((data) => console.log(data))
    .catch( data => console.log('Error', data) )
}, [id])

  return( 
  <div>
    <p>This is a Restaurant</p>
    </div>
  )

}

export default Restaurant
