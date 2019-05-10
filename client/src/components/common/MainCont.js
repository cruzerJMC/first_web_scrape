import React, { Component } from "react";

import { Segment } from "semantic-ui-react";
import HomeMenu from "./HomeMenu";
// import WeaponsSpecs from "./WeaponsSpecs";

class MainCont extends Component {
  render() {
    return (
      <div>
        <Segment>
          <HomeMenu />
        </Segment>
      </div>
    );
  }
}

export default MainCont;
