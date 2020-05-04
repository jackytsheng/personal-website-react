import React from 'react';
import Profile from './component/Profile';
import Header from '../Header';
import Content from './component/Content';

function Page(props) {
  return(
    <div className="page__wrapper">
      <div className = "page__profile">
        <Profile/>
      </div>
      <div className = "page__header">
        <Header/>
      </div>
      <div className = "page__content">
        <Content/>
      </div>

    </div>
  )
}


export default Page;