import { Routes, Route } from "react-router-dom";
// import './App.css';
import './bulma.min.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Product from "./pages/product";


const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
