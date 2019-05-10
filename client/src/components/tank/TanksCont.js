import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Table } from "semantic-ui-react";
import { fetchAllTanks } from "../../actions/weapons";

import Tanks from "./Tanks";

class TanksCont extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllTanks());
  }
  render() {
    console.log("TankCont", this.state);
    return (
      <div>
        <Table color="green" inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>MODERN TANKS</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Grid columns={2} compact divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <Tanks />
            </Grid.Column>
            <Grid.Column width={6}>Test</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(null)(TanksCont);
