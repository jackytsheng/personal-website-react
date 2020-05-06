import React from "react";
import styles from "./Content.module.scss";
import About from "./component/About";
import Home from "./component/Home";
import FlipPage from "react-flip-page";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "HOME",
    };
  }
  render() {
    const Index = this.props.Index;
    const params = {
      uncutPages:true,
    };
    return (
      <div className={styles.container}>
        <FlipPage
          {...params}
          ref={(component) => {
            this.flipPage = component;
          }}
        >
          <Home />
          <About />
        </FlipPage>
        <button onClick={()=>{this.flipPage.gotoPage(Index)}}>Previous</button>
      </div>
    );
  }
}

export default Content;
