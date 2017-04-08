import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house.js';
import HouseInfo from '../components/houseInfo.jsx';
import { Col, Panel } from 'react-bootstrap';
import Roommate from '../components/roommate.jsx';

class House extends Component {
	constructor() {
		super()
		
	}


	componentWillMount() {
		console.log('getting state')
		this.setState(this.props.house);
		console.log(this.state)
	}

	handleSubmit(e) {
		console.log('eeeeeeeeee ', e)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Col xs={6}>
						<Panel header="HOUSE INFO">
							<HouseInfo state={this.state} 
							info={this.props.house.info} 
							update={this.props.updateHouseInfo} 
							handleSubmit={this.handleSubmit.bind(this)} />
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
