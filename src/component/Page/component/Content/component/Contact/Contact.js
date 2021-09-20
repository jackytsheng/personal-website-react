import React from 'react';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWeixin } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>JUST SAY HELLO </h1>
      <div className={styles.seperator}></div>
      <h2>Feel free to get in touch with me</h2>
      <h4 className={styles.description}>
        I am always open to discussing new projects, creative ideas and
        opportunities
      </h4>

      <div className={styles.detail}>
        <div className={styles.detailItem}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className={styles.description}>
            <p>Melbourne, Australia</p>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className={styles.description}>
            <p>j.zheng822@gmail.com</p>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faWeixin} />
          </div>
          <div className={styles.description}>
            <p>jackytsheng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
