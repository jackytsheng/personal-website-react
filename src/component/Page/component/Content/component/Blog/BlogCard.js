import React from "react";
import styles from "./Blog.module.scss";


class BlogCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src="./img.jpg" alt=""/>
      </div>
      <div className={styles.back}>
        <div className={styles.backContent}>
          <h2>DarkCode</h2>
          <span>Youtube Channel</span>
          <div className={styles.sm}>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default BlogCard;
