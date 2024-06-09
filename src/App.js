import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";
import ShopingCart from "./pages/shoppingCart/ShopingCart";
import Payment from "./pages/payment/Payment";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/about' element={<About />}/>
          <Route path='/shopping-cart' element={<ShopingCart />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/shop' element={<Shop />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
