import React from 'react';
import Header from './component/Header';
import styles from './Page.module.scss';
import Content from './component/Content';
import Profile from './component/Profile';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      current:"HOME",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt,name){
     evt.preventDefault();
    // const nameIndexMapper={
    //   "HOME": 0,
    //   "ABOUT": 1,
    //   "BLOG": 2,
    //   "PROJECT": 3,
    //   "CONTACT": 4,
    //   };
    this.setState({
      previous: this.state.current,
      current: name,
    });
  }

  render(){
    return (
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <Profile handleImageLoaded={this.props.handleImageLoaded} />
        </div>
        <div className={styles.header}>
          <Header current={this.state.current} handleClick={this.handleClick} />
        </div>
        <div className={styles.content}>
          <Content previous={this.state.previous} current={this.state.current} />
        </div>
      </div>
    );
}
}


export default Page;