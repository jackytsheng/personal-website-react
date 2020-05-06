import React from 'react';
import Nav from './component/Nav';


function Header(props) {
  return (
    <div className="header__wrapper">
      <Nav IndexChange={props.IndexChange} />
    </div>
  );
}


export default Header;