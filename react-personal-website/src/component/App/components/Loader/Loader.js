import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.wrapper}>
    <div className={styles.loader}>
      <div className={styles.box}></div>
      <div className={styles.hill}></div>
      <div className={styles.wave}>
        <span className={styles.one}>L</span>
        <span className={styles.two}>o</span>
        <span className={styles.three}>a</span>
        <span className={styles.four}>d</span>
        <span className={styles.five}>i</span>
        <span className={styles.six}>n</span>
        <span className={styles.seven}>g</span>
        <span className={styles.eight}>.</span>
        <span className={styles.nine}>.</span>
        <span className={styles.ten}>.</span>
      </div>
    </div>
  </div>
);


export default Loader;