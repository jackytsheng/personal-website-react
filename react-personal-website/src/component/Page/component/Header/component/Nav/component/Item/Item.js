import React from 'react';
import './Item.module.css';
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
<a className="item" href={href}>
  <FontAwesomeIcon icon = {iconMapper[href]}/>
</a>
);


export default Item;