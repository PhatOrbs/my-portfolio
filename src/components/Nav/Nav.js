import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav>
    <div className="nav-wrapper">
      <a href="#" id="eddy-title" className="brand-logo">Eddy Collado</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="active"><a href="/">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
    );
}

export default Nav;