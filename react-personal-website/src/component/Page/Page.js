import React from 'react';
import Header from './component/Header';
import styles from './Page.module.scss';
import Content from './component/Content';

function Page(props) {
  return (
    <div className={styles.page__wrapper}>
      {/* <div className = "page__profile">
        <Profile/>
      </div> */}
      <div className={styles.page__header}>
        <Header />
      </div>
      <div className={styles.page__content}>
        <Content />
      </div>
    </div>
  );
}


export default Page;