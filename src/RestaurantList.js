import React from 'react'

function RestaurantList({restaurantNames, filterItems, activeRestaurant}) {
  return (
    <div className='btn-container'>
      {restaurantNames.map((restaurant, index) => {
        return (
            <button
            type='button'
            className={`${
                activeRestaurant === restaurant ? "filter-btn active" : "filter-btn"
              }`}
              key= {index}
              onClick={() => filterItems(restaurant)}>{restaurant}</button>
        );
      })}
    </div>
  )
}

export default RestaurantList
