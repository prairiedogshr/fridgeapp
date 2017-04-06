import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser } from '../actions/house/house';
import User from '../components/user.jsx';
import HouseInfo from '../components/houseInfo.jsx';
import { Col, Panel } from 'react-bootstrap';

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
		console.log('users! ', users)
		const houseInfo = this.props.houseInfo;

		return (
			<div className="container">
				<div className="row">
					<Col xs={6}>
						<Panel header="Address">
							<HouseInfo info={this.props.house.info.address} onClick={() => {
								this.updateHouse('address', 'here')
							}} />
						</Panel>
						<Panel>
							<HouseInfo info={this.props.house.info.city} />
						</Panel>
					</Col>
					<Col xs={6}>
						{this.props.house.users.map(user => 
							<p key={user}>{user}</p>
						)}
				</Col>
			</div>
		</div>
		)
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
