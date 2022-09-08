import React, { useEffect, useState } from 'react';
import './App.css';
import logo from "/home/sharon/Development/code/phase-3/foodie-review/src/logo.jpeg";
import RestaurantList from './RestaurantList';



function App() {
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [activeRestaurant, setActiveRestaurant] = useState("");

  const allRestaurants = ["all", ...new Set(restaurantItems.map((item) => item.name))];
  const [restaurantNames, setRestaurantNames] = useState(allRestaurants);

  const filterItems = (restaurant) => {
    setActiveRestaurant(restaurant);
    if (restaurant === "all") {
      setRestaurantItems();
      return;
    }
    const newItems = restaurantItems.filter((item) => item.name === restaurant);
    setRestaurantItems(newItems);
  }

  useEffect(() => {
    fetch("http://localhost:9293/restaurants")
    .then((r) => r.json())
    .then((restaurantItems) => setRestaurantItems(restaurantItems))
  }, []);

  return (
    <div>
      <main>
        <section className='restaurant section'>
          <div className='title'>
            <img src={logo} alt="logo" className='logo'/>
            <h2>Restaurant review List</h2>
            <div className='underline'></div>
          </div>
          <RestaurantList
          restaurantNames={restaurantNames}
          activeRestaurant={activeRestaurant}
          filterItems={filterItems}
           />
        </section>
      </main>
      
    </div>
  );
}

export default App;
