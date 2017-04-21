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
    const roommateList = this.props.house.users.sort((user1, user2) => {
      if (user1.user_id === this.props.currentUser.id) {
        return -1;
      }
      return 1;
    });

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6" style={{ marginBottom: 15 }} >
              <HouseInfo
                info={this.props.house}
                update={this.props.updateHouseInfo}
                currentUser={this.props.currentUser}
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                {roommateList.map(user =>
                  <div className="col-md-6" style={{ marginBottom: 15 }}>
                    <Roommate
                      history={this.props.history}
                      roommate={user}
                      currentUser={this.props.currentUser}
                      remove={this.props.removeUser}
                    />
                  </div>
                )}
              </div>
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

