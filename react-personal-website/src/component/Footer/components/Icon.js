import React from "react";
import styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon icon={props.icon} />
  </div>
);
;

export default Icon;
