import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faBriefcase,faBook,faAddressCard,faHome,faUserCircle} from '@fortawesome/free-solid-svg-icons'

const iconMapper = {
  HOME: faHome,
  ABOUT: faUser,
  "https://blog.jiajinzheng.com": faBook,
  "https://gaget.jiajinzheng.com": faBriefcase,
  CONTACT: faAddressCard,
  PROFILE: faUserCircle,
};
const Item = (
  props
) => {
return (
  <a
    className={`
    ${props.href === "PROFILE" ? styles.profile : ""}
      ${props.href === "HOME" ? styles.itemFirst : ""} ${
      props.activeState ? `${styles.item} ${styles.active}` : styles.item
    }`}
    href={props.href}
    onClick={(e) => props.onClick(e, props.href)}
    rel="noopener noreferrer"
    target="_blank"
  >
    <FontAwesomeIcon icon={iconMapper[props.href]} />
  </a>
);
};


export default Item;