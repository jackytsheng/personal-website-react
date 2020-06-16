import React from "react";
import styles from "./Footer.module.scss";
import Icon from './components/Icon';
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className={styles.wrapper}>
    <Icon icon={faTwitterSquare} />
    <Icon icon={faLinkedin} />
    <Icon icon={faGithubSquare} />
  </div>
);
;

export default Footer;
