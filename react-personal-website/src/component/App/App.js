import React from 'react';
import './App.css';
import Header from '../Header';

function App(){
  return (
    <div className="layout">
      <section className="layout__header">
        <Header/>
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