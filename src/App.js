import { Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase"
import { getDatabase, ref, onValue, off } from "firebase/database";

import AddProduct from "./pages/addproduct";
import Home from "./pages/home";
import Product from "./pages/product";

import Navbar from "./components/navbar";

import './bulma.min.css'
import Profile from "./pages/profile";

import React, { useState, useEffect } from 'react';;

// init firebase
initializeApp(firebaseConfig);
console.log("init")

const App = () => {
  const db = getDatabase();
  const auctionRef = ref(db, 'Auction/');

  // subscribe
  onValue(auctionRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    // updateStarCount(postElement, data);
  });

  // detach
  // off(auctionRef)

  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/add_bid" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
