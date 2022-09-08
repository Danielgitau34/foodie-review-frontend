import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import logo from "/home/sharon/Development/code/phase-3/foodie-review/src/logo.jpeg";
import RestaurantList from './RestaurantList';
import RestaurantCard from './RestaurantCard';
import ReviewCard from './ReviewCard';
import Restaurant from './Restaurant';
import Restaurants from './Restaurants';


//const allRestaurants = ["all", ...new Set(restaurantItems.map((item) => item.name))]

const App = () => {
  /*const [restaurantItems, setRestaurantItems] = useState([]);
  const [activeRestaurant, setActiveRestaurant] = useState("");

  const allRestaurants = ["all", ...new Set(restaurantItems.map((item) => item.name))]
  const [restaurantNames, setRestaurantNames] = useState(allRestaurants);

  console.log(allRestaurants)

  console.log(restaurantNames)

  const filterItems = (restaurant) => {
    setActiveRestaurant(restaurant);
    if (restaurant === "all") {
      setRestaurantItems(restaurantItems);
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
          restaurantNames={allRestaurants}
          activeRestaurant={activeRestaurant}
          filterItems={filterItems}
           />
           <RestaurantCard items={restaurantItems}/>

           <ReviewCard items={restaurantItems}/>
        </section>
      </main>
      
    </div>
  );*/

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Restaurants/>}></Route>
      <Route path='/restaurants/:id' element={<Restaurant />}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
