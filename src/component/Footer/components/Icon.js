import React from "react";
import styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => (
  <a
    className={styles.wrapper}
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={props.icon} />
  </a>
);
;

export default Icon;
