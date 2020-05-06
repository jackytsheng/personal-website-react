import React from 'react';
import Header from './component/Header';
import styles from './Page.module.scss';
import Content from './component/Content';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Index:0,
    };
  }
  changeIndex(name){
    const nameIndexMapper={
      "HOME": 0,
      "ABOUT": 1,
      "BLOG": 2,
      "PROJECT": 3,
      "CONTACT": 4,
      };
      console.log(nameIndexMapper[name]);
    this.setState({
      Index:nameIndexMapper[name],
    });
  }

  render(){
    const Index = this.state.Index;
    const IndexChangeFunc = this.changeIndex.bind(this);
  return (
    <div className={styles.page__wrapper}>
      {/* <div className = "page__profile">
        <Profile/>
      </div> */}
      <div className={styles.page__header}>
        <Header IndexChange={IndexChangeFunc} />
      </div>
      <div className={styles.page__content}>
        <Content Index={Index} />
      </div>
    </div>
  );
}
}


export default Page;