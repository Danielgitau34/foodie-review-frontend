import React, { useEffect, useState } from 'react';
import './App.css';
import logo from "/home/sharon/Development/code/phase-3/foodie-review/src/logo.jpeg";

function App() {
  const [restaurantItems, setRestaurantItems] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:9293/restaurants")
    .then((r) => r.json())
    .then((restaurantItems) => setRestaurantItems(restaurantItems))
  }, []);

  return (
    <div>
      <main>
        <section className='menu section'>
          <div className='title'>
            <img src={logo} alt="logo" className='logo'/>
            <h2>Restaurant review List</h2>
            <div className='underline'></div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;
