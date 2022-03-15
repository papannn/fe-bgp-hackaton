import { Routes, Route } from "react-router-dom";

import AddProduct from "./pages/addproduct";
import Home from "./pages/home";
import Product from "./pages/product";

import Navbar from "./components/navbar";

import './bulma.min.css'


const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/add_bid" element={<AddProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
