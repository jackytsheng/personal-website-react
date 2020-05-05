import React from 'react';
import style from './App.module.scss';
import Page from '../Page';

function App(){
  return (
    <div className={style.layout}>
      <section className="layout__page">
        <Page/>
      </section>
      {/* <section className="layout__page">
        <Page/>
      </section>
      <section className="layout__Footer">
        <Footer/>
      </section> */}
    </div> 
  );
}

export default App