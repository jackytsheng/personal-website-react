import React from 'react';
import styles from "./Project.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMapMarkerAlt,faMobileAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import { faWeixin } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Oops ! Looks like I am working hard on this page...</h1>
      <div className={styles.seperator}></div>
      <h2>Come back later and visit this page again. </h2>
    </div>
  );
};

export default Project;