import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house';
import HouseInfo from '../components/houseInfo';
import Roommate from '../components/roommate';
import ThemeDefault from '../styles/theme-default';

class House extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6" style={{ marginBottom: 15 }} >
              <HouseInfo
                info={this.props.house}
                update={this.props.updateHouseInfo}
                currentUser={this.props.currentUser}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              {this.props.house.users.map(user =>
                <div className="col-xs-12 col-md-6" style={{ marginBottom: 15 }}>
                  <Roommate
                    roommate={user}
                    currentUser={this.props.currentUser}
                    remove={this.props.removeUser}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
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

