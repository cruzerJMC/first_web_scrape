import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

import MainCont from "./common/MainCont";

class App extends Component {
  render() {
    return (
      <div>
        <style>
          {`
      html, body {
        background-color: #252839 !important;
      }
      `}
        </style>
        {/* <div className="ui raised segment"> */}
        <div className="ui segment violet inverted">
          <Header color={"violet"} inverted as="h1">
            SPACE - X - TRAVELER
          </Header>
        </div>
        {/* </div> */}
        {/* <Segment> */}
        <MainCont />
        {/* </Segment> */}
      </div>
    );
  }
}

export default App;
