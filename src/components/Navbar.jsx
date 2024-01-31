import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className="p-3 text-bg-dark header">
      <div className="navbar">
        <Link to="/" className={styles.link}>
          <h1>Movies Quad</h1>
        </Link>
        <Link to="/fav" className={styles.link}>
          <h2>Favourites</h2>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
