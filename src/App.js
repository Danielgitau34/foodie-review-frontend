import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Restaurant from './Restaurant';
import Restaurants from './Restaurants';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Restaurants/>}></Route>
      <Route path='/restaurants/:id' element={<RestaurantCard />}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
