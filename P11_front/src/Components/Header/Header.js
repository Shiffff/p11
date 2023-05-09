import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeaderL">
        <Link to="/">
          <img src="../logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="mainHeaderR">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activLink" : null)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activLink" : null)}
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
