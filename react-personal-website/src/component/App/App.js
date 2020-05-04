import React from 'react';
import './App.css';
import Page from '../Page';

function App(){
  return (
    <div className="layout">
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