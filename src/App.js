import React from 'react';
import './App.css';
import ShopList from './components/ShopList/ShopList';
import api from "./data/api"

// console.log(api.createOrder("2020-05-08T14:26:48Z", "Good-Morning"))

function App() {
  return (
    <div className="App">
      {/* opens up ShopList function from ShopList.js  */}
        <ShopList/>
    </div>
  );
}

export default App;
