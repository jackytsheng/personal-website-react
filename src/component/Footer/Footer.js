import React from 'react';
import styles from './Footer.module.scss';
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
        Copyright &copy; 2021 Jiajin Zheng. All rights reserved.
      </p>
    </div>
    <div className={styles.filler}></div>
    <div className={styles.iconWrapper}>
      <Icon
        desc='Twitter Link'
        icon={faTwitterSquare}
        href='https://twitter.com/Jiajin_Zheng'
      />
      <Icon
        desc='LinkedIn Link'
        icon={faLinkedin}
        href='https://www.linkedin.com/in/jacky-jiajin-zheng-76a64b164/'
      />
      <Icon
        desc='Github Link'
        icon={faGithubSquare}
        href='https://github.com/jackytsheng'
      />
    </div>
  </div>
);
export default Footer;
