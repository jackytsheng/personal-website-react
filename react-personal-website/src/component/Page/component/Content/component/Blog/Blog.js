import React from 'react';
import styles from "./Blog.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt,faMobileAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

class Blog extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render() {
    return <div className={styles.wrapper}></div>;
  }
}

export default Blog;