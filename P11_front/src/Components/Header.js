import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeaderL">
        <img src="../logo.svg" alt="logo" />
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
