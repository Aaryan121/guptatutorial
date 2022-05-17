import React from "react";
import styles from "../styles/Navbar.module.css";
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.brand}>Gupta Tutorial</div>
      <div className={styles.routes}>
        <ul>
          <li>
            <BsSunFill />
          </li>
          <li>Home</li>
          <li>CSIT</li>
          <li>BIT</li>
          <li>BCA</li>
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillYoutube />
          </li>
          <li>
            <AiFillInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
