import React from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "../shoppingIcon/ShoppingIcon";

const Nav = () => {
  return (
    <div>
      <ul id="navbar">
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        {/* <li>
          <Link to='/home'>Blog</Link>
        </li> */}
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li id="lg-bag">
          <ShoppingIcon />
        </li>
        <Link href="#" id="close">
          <i class="far fa-times"></i>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
