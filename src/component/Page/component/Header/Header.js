import React from 'react';
import Nav from './component/Nav';


function Header({
  handleClick,
  current
}) {
  return (
    <div className="header__wrapper">
      <Nav current={current} handleClick={handleClick} />
    </div>
  );
}


export default Header;