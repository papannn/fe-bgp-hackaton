import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import AddProduct from "./pages/addproduct";
import Home from "./pages/home";
import Product from "./pages/product";
import Profile from "./pages/profile";

import Navbar from "./components/navbar";

import './bulma.min.css'
import { BE_HOST } from "./const";


const App = () => {
  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState({});
  const [gopayData, setGopayData] = useState({}); 
  const [productListData, setProductListData] = useState([]);
  const [productData, setProductData] = useState({});
  const [productBuyerListData, setProductBuyerListData] = useState([]);
  const [productSellerListData, setProductSellerListData] = useState([]);

  const getUserInfo = () => {
    if (token != null) {
      axios.get(BE_HOST + `user/${token}`).then(res => {
        setUserData(res.data.data);
      }).catch(err => {
        console.log(err.data);
      });
    }
  }

  const getGopayInfo = () => {
    if (token != null) {
      axios.get(BE_HOST + `gopay/user/${token}`).then(res => {
        setGopayData(res.data.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const getProductListInfo = () => {
    if (token != null) {
      axios.get(BE_HOST + `products`).then(res => {
        setProductListData(res.data.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const getProductBuyerListInfo = () => {
    if (token != null) {
      axios.get(BE_HOST + `products/buyer/${token}`).then(res => {
        setProductBuyerListData(res.data.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const getProductSellerListInfo = () => {
    if (token != null) {
      axios.get(BE_HOST + `products/seller/${token}`).then(res => {
        setProductSellerListData(res.data.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const handleClickProduct = (productParamData) => {
    setProductData(productParamData)
  }

  useEffect(() => {
    getUserInfo();
    getGopayInfo();
    getProductListInfo();
    getProductBuyerListInfo();
    getProductSellerListInfo();
  }, [token]);

  return (
    <div className="App container">
      <Navbar userInfo={userData} gopayInfo={gopayData} />
      <Routes>
        <Route path="/" element={<Home productList={productListData} handleClickProduct={handleClickProduct}/>}/>
        <Route path="/my_bid" element={<Home productList={productBuyerListData} handleClickProduct={handleClickProduct}/>}/>
        <Route path="/my_sell" element={<Home productList={productSellerListData} handleClickProduct={handleClickProduct}/>}/>
        <Route path="/product/:productId" element={<Product productData={productData}/>}/>
        <Route path="/add_bid" element={<AddProduct />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
