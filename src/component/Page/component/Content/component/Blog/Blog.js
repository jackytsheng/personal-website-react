import React from 'react';
import styles from "./Blog.module.scss";
// import BlogCard from './BlogCard';

class Blog extends React.Component {

  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Oops ! Looks like I am working hard on this page...</h1>
        <div className={styles.seperator}></div>
        <h2>Come back later and visit this page again. </h2>

        {/* <div className={styles.cardContainer}>
          <BlogCard/>
        </div> */}
      </div>
    );
  }
}

export default Blog;