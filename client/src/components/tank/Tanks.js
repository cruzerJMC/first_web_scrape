import React, { Component } from "react";
import { connect } from "react-redux";
// import { setCurrentShip } from "../../actions/weapon";
import { Table, Message, Segment } from "semantic-ui-react";

import Tank from "./Tank";
// import SpaceHeader from "./SpaceHeader";

class Tanks extends Component {
  render() {
    console.log("Tanks", this.props);
    return (
      <Segment inverted>
        {this.props.tanks.map((tank, index) => {
          return <Tank key={index} num={index + 1} {...tank} />;
        })}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tanks: state.weapons.tanks
});
// const mapDispatchToProps = dispatch => {
//   return {
//     setCurrentShip: ship => dispatch(setCurrentShip(ship))

//     // fetchMetrics: metrics => dispatch(fetchMetrics(metrics))
//   };
// };
export default connect(mapStateToProps)(Tanks);
// export default MainPage;
