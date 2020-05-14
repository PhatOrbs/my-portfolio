import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav>
    <div className="nav-wrapper">
      <Link className="brand-logo" to="/" id="eddy-title">
        Eddy Collado
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link 
          to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/Portfolio"
            ? "nav-link active"
            : "nav-link"
          }
          >Portfolio
          </Link>
          </li>
        <li>
          <Link 
          to="/contact"
          className={window.location.pathname === "/contact"
           ? "nav-link active"
          : "nav-link"}
          >
            Contact
          </Link>
          </li>
      </ul>
    </div>
  </nav>
    );
}

export default Nav;