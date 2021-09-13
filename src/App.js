
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js'
import { useState } from 'react';

import Products from './components/products.js';


function App() {
  

   

  return (
    <div className="App">
      <NavBar />

      
      <Products />
      
    </div>
  );
}

export default App;

