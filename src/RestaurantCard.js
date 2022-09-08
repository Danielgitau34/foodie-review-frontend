import React from 'react'
import img from '/home/sharon/Development/code/phase-3/foodie-review/src/restaurant.jpg'

function RestaurantCard({items}) {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, name, image, cuisine, price_range, location, website } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">${price_range}</h4>
              </header>
              <p className="item-text">
              {cuisine}   {location}</p>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default RestaurantCard
