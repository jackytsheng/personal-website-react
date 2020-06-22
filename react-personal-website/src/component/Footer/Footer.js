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
    <div className={styles.copyrightWrapper}>
      <p className={styles.copyright}>
        Copyright &copy; 2020 Jiajin Zheng. All rights reserved.
      </p>
    </div>
    <div className={styles.filler}>
    </div>
    <div className={styles.iconWrapper}>
      <Icon icon={faTwitterSquare} href="https://twitter.com/Jiajin_Zheng" />
      <Icon
        icon={faLinkedin}
        href="https://www.linkedin.com/in/jiajin-zheng-76a64b164/"
      />
      <Icon icon={faGithubSquare} href="https://github.com/jackytsheng" />
    </div>
  </div>
);
;

export default Footer;
