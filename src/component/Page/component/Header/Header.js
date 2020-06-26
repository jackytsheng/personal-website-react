import React from 'react';
import Nav from './component/Nav';


function Header({
  handleClick,
  current
}) {
  return (
    <div>
      <Nav current={current} handleClick={handleClick} />
    </div>
  );
}


export default Header;