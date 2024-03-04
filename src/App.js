import React from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from './Components/Sidebar/Sidebar.js'
import "./App.css"
import Header from "./Components/header/Header.js";
import Product from "./Components/Products/Product.js";
import Comment from "./Components/Comments/Comment.js";
import Order from "./Components/Orders/Order.js";
import Offers from "./Components/Offers/Offers.js";
import Users from "./Components/Users/Users.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/comments" element={<Comment />} />          
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Order />} />     
          <Route path="/offers" element={<Offers />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
