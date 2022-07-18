import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <img src="./images/sajilo-khoj-logo.png" alt="brand-logo" />
      </div>
      <div className="main-nav-items">
        <ul>
          <form>
            <input type="text" placeholder="Search" />
          </form>
          <li>
            <a href="/" className="nav-item__dropdown">O</a>
          </li>
          <li>
            <a href="/" className="nav-item__dropdown">O</a>
          </li>
          <li><a href="/">SignIn</a></li>
          <li><a href="/">Join Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
