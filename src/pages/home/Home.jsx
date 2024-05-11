import React from "react";
import Banner from "../../components/banner/Banner";
import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero/Hero";
import HotBanner from "../../components/hotBanner/HotBanner";
import ProductList from "../../components/productList/ProductList";
import { ProductOne } from "../../constanst";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Feature />
      <HotBanner />
      <ProductList
        producList={ProductOne}
        productCategoty="Featured Products"
        shortNote="Summer Collection New Morden Design"
        key="product1"
      />
      <Banner />
    </div>
  );
};

export default Home;
