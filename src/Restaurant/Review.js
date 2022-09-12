import React from 'react'
import styled from 'styled-components'



function Review({review}) {
    const{description, rating} = review
    console.log(description)
  return (
    <div className='card'>
      <div className='rating-container'>
        <div className='rating-score'>{rating}</div>
      </div>
      <div className='description'>{description}</div>
    </div>
  )
}

export default Review
