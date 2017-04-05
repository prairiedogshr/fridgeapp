import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser } from '../actions';
import User from '../components/user.jsx';

class House extends Component {

	updateHouse(item, value) {
		console.log('getting called')
		this.props.updateHouseInfo({
			item,
			value 
		})
	};

	addUser(user) {
		this.props.addUser(user);
	}

	render() {
		const users = this.props.users;
		const houseInfo = this.props.houseInfo;

		return (
			<div>
				<p onClick={() => {
					this.updateHouse('address', 'here')
				}}>{this.props.house.info.address}</p>
			</div>
		)
	}
}

const mapStateToProps = ({ houseReducer }) => ({
	house: houseReducer
})

export default connect(
	mapStateToProps,
	{
		addUser,
		removeUser,
		updateHouseInfo
	}
	)(House)