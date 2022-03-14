import { Routes, Route } from "react-router-dom";
import './App.css';
import './bulma.min.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";


const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
