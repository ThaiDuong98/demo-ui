import React from "react";

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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li id="lg-bag">
          <a href="#">
            <i class="far fa-shopping-bag"></i>
          </a>
        </li>
        <a href="#" id="close">
          <i class="far fa-times"></i>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
