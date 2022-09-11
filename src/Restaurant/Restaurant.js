import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import axios from 'axios'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`

function Restaurant(props) {
  //const [restaurants, setRestaurants] = useState([])
  const [restaurant, setRestaurant] = useState({})
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState({description:'', rating: 0})

  let { id } = useParams();
  console.log("This is my id", id)
  

  useEffect(() => {
   
    fetch(`http://localhost:9293/restaurants/${id}`)
     .then((r) => r.json())
    .then((data) => {
    setRestaurant(data)
    setReviews(data.included)
  })

    .catch( data => console.log('Error', data) )
}, [id])
  console.log(restaurant.review)

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))


    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const restaurant_id = restaurant.id

    axios.post('http://localhost:9293/reviews', {review, restaurant_id})
    .then(resp => {
      const included = [...restaurant.included, resp.data]
      setRestaurant({...restaurant, included})
      setReview({description:'', rating: 0})
    })
    .catch(resp => {})

    
  }
    const setRating = (rating, e) => {
      e.preventDefault()
      
      setReview({...review, rating})
    }
  return( 
  <Wrapper>
    <Fragment>
    <Column>
    <Main>
     <Header restaurant = {restaurant}/>
      <div className='reviews'></div>
    </Main>
    </Column>
    <Column>
      <ReviewForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setRating={setRating}
        restaurant={restaurant}
        review={review}
      />
    </Column>
    </Fragment>
    </Wrapper>
  )

}

export default Restaurant
