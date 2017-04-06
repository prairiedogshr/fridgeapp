import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser } from '../actions';
import User from '../components/user.jsx';
import HouseInfo from '../components/houseInfo.jsx';

class House extends Component {

  updateHouse(item, value) {
    console.log('getting called');
    this.props.updateHouseInfo({
      item,
      value,
    });
  }

  addUser(user) {
    this.props.addUser(user);
  }

  render() {
    const users = this.props.house.users;
    console.log('users! ', users);
    const houseInfo = this.props.houseInfo;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <HouseInfo info={this.props.house.info} onClick={() => {
              this.updateHouse('address', 'here');
            }}/>
          </div>
          <div className="col-md-6">
            {this.props.house.users.map(user =>
              <p key={user}>{user}</p>,
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ houseReducer }) => ({
  house: houseReducer,
});

export default connect(
  mapStateToProps,
  {
    addUser,
    removeUser,
    updateHouseInfo
  },
)(House);
