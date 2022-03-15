import { Routes, Route } from "react-router-dom";

import AddProduct from "./pages/addproduct";
import Home from "./pages/home";
import Product from "./pages/product";

import Navbar from "./components/navbar";

import './bulma.min.css'
import Profile from "./pages/profile";


const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/add_bid" element={<AddProduct />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
