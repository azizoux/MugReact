import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            className="image"
            src={require("../../assets/logo/logo.png")}
            alt="logo"
          />
        </Link>
        <Link to="/article/add">
          <span className="ajouter">Ajouter Article</span>
        </Link>
      </div>
      <input
        onChange={(e) => props.filter(e.target.value)}
        className="search"
        type="text"
        placeholder="search"
      />
    </div>
  );
}

export default NavBar;
