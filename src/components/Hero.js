import React from "react";
import styles from "../styles/Hero.module.css";
import logo from "../Assets/images/dark/dummylogo.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <h2>Complete your Bacholers jurney here.... </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante
          in nibh mauris cursus mattis molestie a. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames. Vel elit scelerisque
          mauris pellentesque. Eget nunc lobortis mattis aliquam faucibus purus.
          Molestie nunc non blandit massa enim nec dui nunc. Porttitor leo a
          diam sollicitudin tempor id eu nisl nunc. Cursus.
        </p>
      </div>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
    </div>
  );
}

export default Hero;
