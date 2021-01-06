import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <h1>EFFWAN</h1>
      <h2>A newbies F1 factfile</h2>
      <p>Tap on the cards for more info</p>
    </div>
  );
};

export default Navbar;
