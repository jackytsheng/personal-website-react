import React from "react";
import styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => (
  <a className={styles.wrapper} href={props.href} target="_blank">
    <FontAwesomeIcon icon={props.icon} />
  </a>
);
;

export default Icon;
