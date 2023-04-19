import React from 'react';
import Item from './component/Item';
import styles from './Nav.module.scss';

const Nav = ({ current, handleClick }) => (
  <nav className={styles.container}>
    <div className={styles.topFiller}></div>
    <Item
      href='PROFILE'
      desc='Profile Picture'
      activeState={current === 'PROFILE'}
      onClick={handleClick}
    />
    <Item
      href='HOME'
      desc='Home Page'
      activeState={current === 'HOME'}
      onClick={handleClick}
    />
    <Item
      href='ABOUT'
      desc='About Me'
      activeState={current === 'ABOUT'}
      onClick={handleClick}
    />
    <Item
      href='CONTACT'
      desc='Contact Detail'
      activeState={current === 'CONTACT'}
      onClick={handleClick}
    />
    <Item
      desc='Youtube Channel Link'
      href='https://www.youtube.com/channel/UCvNmoHGEeNvE442gZv8qm9w'
      onClick={(e, url) => {}}
    />
    {/* <Item
      desc='Blog Link'
      href='https://blog.jiajinzheng.com'
      onClick={(e, url) => {}}
    /> */}
    <Item
      desc='Portfolio Link'
      href='https://gadget.jiajinzheng.com'
      onClick={(e, url) => {}}
    />

    <div className={styles.bottomFiller}></div>
  </nav>
);

export default Nav;
