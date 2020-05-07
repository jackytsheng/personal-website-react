import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faBriefcase,faBook,faAddressCard,faHome} from '@fortawesome/free-solid-svg-icons'

const iconMapper={
"HOME": faHome,
"ABOUT": faUser,
"BLOG": faBook,
"PROJECT": faBriefcase,
"CONTACT": faAddressCard,
}
const Item = (
  props
) => {
const ItemClick =(evt)=>{
  props.onClick(evt,props.href);
}
return (
  <a
    className={`
      ${props.href === "HOME"? styles.itemFirst:""} ${props.activeState ? `${styles.item} ${styles.active}` : styles.item}`
    }
    href={props.href}
    onClick={ItemClick}
  >
    <FontAwesomeIcon icon={iconMapper[props.href]} />
  </a>
);
};


export default Item;