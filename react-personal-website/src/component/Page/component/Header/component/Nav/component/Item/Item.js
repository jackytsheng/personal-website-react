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
const Item = ({
  href
}) => (
<a className = {`${styles.item} ${styles["item-active"]}`} href = {href} >
  <FontAwesomeIcon icon = {iconMapper[href]}/>
</a>
);


export default Item;