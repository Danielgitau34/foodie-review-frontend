import React from 'react'
import './Rating.css'

function Rating({rating}) {
    const score = (rating / 5)*100
    console.log(score)
  return (
    <span className="star-wrapper">
    <span className="stars" style={{ width: score + "%" }}></span>
  </span>
  )
}

export default Rating
