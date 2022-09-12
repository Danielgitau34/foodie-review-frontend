import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import axios from 'axios'
import Review from './Review'

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
  const [loaded, setLoaded] = useState(false)

  let { id } = useParams();


  
  useEffect(() => {
   
   
    fetch(`http://localhost:9293/restaurants/${id}`)
     .then((r) => r.json())
    .then((data) => {
    setRestaurant(data)
    setReviews(data.reviews)
    setLoaded(true)
  })

    .catch( data => console.log('Error', data) )
}, [id])

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))


    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //const csrfToken = document.querySelector('[name=csrf-token]').content
    //axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const restaurant_id = parseInt(id)
    console.log(restaurant_id)

    axios.post('http://localhost:9293/reviews', {...review, restaurant_id})
    .then(resp => {
     // const included = [...restaurant, resp]
     // console.log(resp)
     // setRestaurant({...restaurant, included})
      setReviews([...reviews, resp.data])
      setReview({description:'', rating: 0})
    })
    .catch(resp => {})

    
  }

  /*useEffect(() => {
     async function handleDestroy() {
       await axios.delete(`http://localhost:9293/reviews/${id}`)
        .then((data) => {
          console.log(data)
          const included = [...reviews]
          console.log(included)
          const index = included.findIndex( (data) => data.id == id )
          included.splice(index, 1)
    
          setReviews(included)
        })
        .catch( data => console.log('Error', data) )
      }
    }, [id])*/
  const handleDestroy = (id, e) => {
    e.preventDefault()

   axios.delete(`http://localhost:9293/reviews/${id}`)
    .then( (data) => {
      console.log(data)
      const included = [...reviews]
      console.log(included)
      const index = included.findIndex( (data) => data.id == id )
      included.splice(index, 1)

      setReviews(included)
    })
    .catch( data => console.log('Error', data) )
  }

    const setRating = (rating, e) => {
      e.preventDefault()
      
      setReview({...review, rating})
    }

    let restaurantReviews = reviews.map((item, index) => {
      console.log("mapping:", item)
      return (
        <Review
        key={index} 
        id={item.id}
        review={item}
        handleDestroy={handleDestroy}
        />
      )
    })
  //}
  return( 
  <Wrapper>
    <Fragment>
    <Column>
    <Main>
     <Header restaurant = {restaurant}/>
      <div className='reviews'>{restaurantReviews}</div>
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
