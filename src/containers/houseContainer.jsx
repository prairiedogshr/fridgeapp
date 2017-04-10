import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house.js';
import HouseInfo from '../components/houseInfo.jsx';
import { Col, Panel } from 'react-bootstrap';
import Roommate from '../components/roommate.jsx';

class House extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<Col xs={6}>
						<Panel header="HOUSE INFO">
							<HouseInfo info={this.props.house.info} 
							update={this.props.updateHouseInfo} />
						</Panel>
					</Col>
					<Col xs={6}>
						<Panel header="Roommates!">
							{this.props.house.users.map(user => 
								<Roommate roommate={user} />
							)}
						</Panel>
				</Col>
			</div>
		</div>
	)}
}

const mapStateToProps = ({ houseReducer }) => ({
	house: houseReducer,
})

export default connect(
	mapStateToProps,
	{
		addUser,
		removeUser,
		updateHouseInfo,
		getHouse
	}
	)(House)

// export default connect(mapStateToProps, mapDispatchToProps)(House);
