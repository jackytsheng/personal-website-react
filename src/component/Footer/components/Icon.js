import React from 'react';
import styles from './Icon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';

const Icon = (props) => (
  <Tooltip title={props.desc} placement='top'>
    <a
      className={styles.wrapper}
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </Tooltip>
);
export default Icon;
