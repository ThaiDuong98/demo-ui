import React from "react";
import Nav from "../../components/nav/Nav";
import { logo } from "../../assets";

const Header = () => {
  return (
    <section id="header">
      <a>
        <img src={logo} class="logo" alt="logo" />
      </a>
      <Nav />
      <div id="mobile">
        <a href="cart.html">
          <i class="far fa-shopping-bag"></i>
        </a>
        <i id="bar" class="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;
