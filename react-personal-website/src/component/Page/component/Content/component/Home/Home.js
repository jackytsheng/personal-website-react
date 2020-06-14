import React from 'react';
import styles from './Home.module.scss';

const Home = (props)=>{

  return (
    <div className={styles.wrapper}>
      <h2>Hello, i'am </h2>
      <h1>JIAJIN ZHENG</h1>
      <h4>WEB FRONT-END DEVELOPER</h4>
      <div className={styles.seperator}></div>
      <p className={styles.description}>
        A professional web developer from Melbourne, Australia. I build
        professional website and create creative solutions.
      </p>
    </div>
  );
}

export default Home;