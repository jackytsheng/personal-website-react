import React from 'react';
import Header from './component/Header';
import './Page.css'

function Page(props) {
  return(
    <div className="page__wrapper">
      {/* <div className = "page__profile">
        <Profile/>
      </div> */}
      <div className = "page__header">
        <Header/>
      </div>
      {/* <div className = "page__content">
        <Content/>
      </div> */}
    </div>
  )
}


export default Page;