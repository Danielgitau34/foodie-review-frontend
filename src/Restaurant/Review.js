import React, { Fragment } from 'react'
import styled from 'styled-components'
import Rating from './Rating'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`

const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }
`

const Author = styled.div`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  margin: 0 8px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  `

function Review({review, id, handleDestroy}) {
    const{description, rating} = review
    console.log(description)
  return (
    <Card>
    <RatingContainer>
        <Rating rating={rating} />
    </RatingContainer>
     <Description>{description}</Description>
    
    <Options>
    <Icon onClick={handleDestroy.bind(this, id)}>
      <i className="fa fa-trash"></i>
    </Icon>
    <Icon>
      <i className="fa fa-pencil"></i>
    </Icon>
  </Options>
  </Card>
  )
}

export default Review
