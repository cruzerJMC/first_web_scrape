import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import TanksCont from "../tank/TanksCont";

class HomeMenu extends Component {
  state = {
    home: true,
    tank: false
  };

  buttonToggle = word => {
    if (word === "tank") {
      return this.setState({
        home: false,
        tank: true
      });
    } else {
      return this.setState({
        home: true,
        tank: false
      });
    }
  };

  menuClick = () => {
    this.buttonToggle("home");
    // this.updateProfileData();
  };
  render() {
    return (
      <Segment inverted>
        <Menu>
          <Menu.Item
            style={{ color: "blue" }}
            name="home"
            onClick={() => this.buttonToggle("home")}
          >
            <strong> Home Page </strong>
          </Menu.Item>
          <Menu.Item
            style={{ color: "blue" }}
            name="tank"
            onClick={() => this.buttonToggle("tank")}
          >
            <strong> Tanks </strong>
          </Menu.Item>
        </Menu>

        <Segment inverted>
          {this.state.tank ? <TanksCont /> : null}

          {this.state.home ? <div>TEST</div> : null}
        </Segment>
      </Segment>
    );
  }
}

export default HomeMenu;
