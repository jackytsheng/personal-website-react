import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBook,
  faAddressCard,
  faHome,
  faUserCircle,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import useWindowResize from '../../../../../../../../hooks/useWindowResize';

const iconMapper = {
  HOME: faHome,
  ABOUT: faUser,
  'https://blog.jiajinzheng.com': faBook,
  'https://gadget.jiajinzheng.com': faGamepad,
  CONTACT: faAddressCard,
  PROFILE: faUserCircle,
  'https://www.youtube.com/channel/UCvNmoHGEeNvE442gZv8qm9w': faYoutube,
};
const Item = (props) => {
  const { width } = useWindowResize();

  return (
    <Tooltip title={props.desc} placement={width > 520 ? 'right' : 'bottom'}>
      <a
        className={`
    ${props.href === 'PROFILE' ? styles.profile : ''}
      ${props.href === 'HOME' ? styles.itemFirst : ''} ${
          props.activeState ? `${styles.item} ${styles.active}` : styles.item
        }`}
        href={props.href}
        onClick={(e) => props.onClick(e, props.href)}
        rel='noopener noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon icon={iconMapper[props.href]} />
      </a>
    </Tooltip>
  );
};

export default Item;
