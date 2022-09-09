import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

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
  const [review, setReview] = useState([])

  let { id } = useParams();
  console.log("This is my id", id)
  

  useEffect(() => {
   
    fetch(`http://localhost:9293/restaurants/${id}`)
     .then((r) => r.json())
    .then((data) => setRestaurant(data))
    .catch( data => console.log('Error', data) )
}, [id])
  console.log(restaurant)

  return( 
  <Wrapper>
    <Column>
    <Main>
     <Header restaurant = {restaurant}/>
      <div className='reviews'></div>
    </Main>
    </Column>
    <Column>
      <div className='review-form'>Review form goes here</div>
    </Column>
    </Wrapper>
  )

}

export default Restaurant
