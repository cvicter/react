import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <ul className="nav-menu">
            <li className="nav-menu-link">
              <a href={"/"}>Home</a>
            </li>
            <li className="nav-menu-link">
              <a href={"/product/form"}>Upload</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
