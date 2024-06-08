import React from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "../shoppingIcon/ShoppingIcon";

const Nav = () => {
  return (
    <div>
      <ul id="navbar">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="shop.html">Shop</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#about"><Link to='/about'>About</Link></a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li id="lg-bag">
          <ShoppingIcon />
        </li>
        <a href="#" id="close">
          <i class="far fa-times"></i>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
