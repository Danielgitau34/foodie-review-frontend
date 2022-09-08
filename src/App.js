import React from 'react';
import './App.css';
import logo from "public/logo.jpeg";

function App() {
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
