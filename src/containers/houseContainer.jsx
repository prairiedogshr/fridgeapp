import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house';
import HouseInfo from '../components/houseInfo';
import Roommate from '../components/roommate';
import ThemeDefault from '../styles/theme-default';

class House extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <Row>
            <Col md={6} style={{ marginBottom: 15 }} >
              <HouseInfo
                info={this.props.house}
                update={this.props.updateHouseInfo}
                currentUser={this.props.currentUser}
              />
            </Col>
            <Col md={6}>
              <Row>
                {this.props.house.users.map(user =>
                  <Col xs style={{ marginBottom: 15 }}>
                    <Roommate
                      roommate={user}
                      currentUser={this.props.currentUser}
                      remove={this.props.removeUser}
                    />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ houseReducer, userReducer }) => ({
  house: houseReducer,
  currentUser: {
    admin: userReducer.user_is_admin === 1,
    id: userReducer.user_id,
  },
});

export default withRouter(connect(
  mapStateToProps,
  {
    addUser,
    removeUser,
    updateHouseInfo,
    getHouse,
  },
)(House));

