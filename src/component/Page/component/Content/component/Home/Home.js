import React from 'react';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2>Hello, i'am </h2>
      <h1>JIAJIN ZHENG</h1>
      <h4>SOFTWARE ENGINEER</h4>
      <div className={styles.seperator}></div>
      <p className={styles.description}>
        A software engineer who delivers full-stack solutions
      </p>
      <div className={styles.location}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className={styles.description}>
          <p>Melbourne, Australia</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
