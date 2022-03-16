import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

import { getDatabase, ref, onValue } from "firebase/database";

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
  const [wsData, setWsData] = useState({});

  const db = getDatabase();
  const auctionRef = ref(db, 'Auction/');

  onValue(auctionRef, (snapshot) => {
    const data = snapshot.val();
    if(JSON.stringify(wsData) !== JSON.stringify(data)) {
      setWsData(data);
      let flagHome = false;
      let flagBuyer = false;
      let flagSeller = false;

      if(data[productData.product_id] !== undefined) {
        productData.total_bidder = data[productData.product_id].bidder_count;
        productData.start_bid = data[productData.product_id].current_price;
      }

      for(let i = 0 ; i < productListData.length ; i++) {
        const product_id = productListData[i].product_id;
        if(data[product_id] !== undefined) {
          productListData[i].total_bidder = data[product_id].bidder_count;
          productListData[i].start_bid = data[product_id].current_price;
          flagHome = true;
        }
      }

      for(let i = 0 ; i < productBuyerListData.length ; i++){
        const product_id = productBuyerListData[i].product_id;
        if(data[product_id] !== undefined) {
          productBuyerListData[i].total_bidder = data[product_id].bidder_count;
          productBuyerListData[i].start_bid = data[product_id].current_price;
          flagBuyer = true;
        }
      }

      for(let i = 0 ; i < productSellerListData.length ; i++){
        const product_id = productSellerListData[i].product_id;
        if(data[product_id] !== undefined) {
          productSellerListData[i].total_bidder = data[product_id].bidder_count;
          productSellerListData[i].start_bid = data[product_id].current_price;
          flagSeller = true;
        }
      }

      if (flagHome) {
        setProductListData(productListData)
      }
      if (flagBuyer) {
        setProductBuyerListData(productBuyerListData);
      }
      if(flagSeller) {
        setProductSellerListData(productSellerListData)
      }
    }
  });  

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
