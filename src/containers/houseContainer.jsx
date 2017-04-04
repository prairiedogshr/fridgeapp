import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser } from '../actions';
import User from '../components/user.jsx';

class House extends Component {

	updateHouse: function(item, value) {
		this.props.updateHouseInfo({
			item,
			value 
		})
	}

	render() {
		const users = this.props.users;
		const houseInfo = this.props.houseInfo;

		return (
			<div>
				<p>Hey!</p>
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