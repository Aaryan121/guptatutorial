import styles from "../styles/Cards.module.css";
import React from "react";
import Book from "../Assets/images/dark/book.png";

function Cards() {
  return (
    <>
      <h2 className={styles.heading}>Study Materials</h2>
      <div className={styles.card}>
        <div className={styles.cardBox}>
          <div className={styles.imgDiv}>
            <img src={Book} />
          </div>
          <div className={styles.cardText}>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus. Molestie nunc
              non blandit massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin Cursus.massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin tempor id eu nisl nunc. Cursus.
            </p>
          </div>
        </div>{" "}
        <div className={styles.cardBox}>
          <div className={styles.imgDiv}>
            <img src={Book} />
          </div>
          <div className={styles.cardText}>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus. Molestie nunc
              non blandit massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin Cursus.massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin tempor id eu nisl nunc. Cursus.
            </p>
          </div>
        </div>{" "}
        <div className={styles.cardBox}>
          <div className={styles.imgDiv}>
            <img src={Book} />
          </div>
          <div className={styles.cardText}>
            <p>
              Eget nunc lobortis mattis aliquam faucibus purus. Molestie nunc
              non blandit massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin Cursus.massa enim nec dui nunc. Porttitor leo a diam
              sollicitudin tempor id eu nisl nunc. Cursus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
