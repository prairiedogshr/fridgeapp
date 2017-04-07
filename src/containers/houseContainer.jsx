import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house.js';
import HouseInfo from '../components/houseInfo.jsx';
import { Col, Panel } from 'react-bootstrap';
import Roommate from '../components/roommate.jsx';

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
	};

	componentWillMount() {
		console.log('getting house')
		this.props.getHouse(3)
		console.log('will mount, after getHouse call ', this.props.house)
	}

	render() {
		if (this.props.house.loaded === true) {
			console.log('loaded! ', this.props.house)
			return (
				<div className="container">
					<div className="row">
						<Col xs={6}>
							<Panel header="HOUSE INFO">
								<HouseInfo info={this.props.house.info} onClick={() => {
									this.updateHouse('address', 'here')
								}} />
							</Panel>
						</Col>
						<Col xs={6}>
							<Panel header="Roommates!">
								{this.props.house.users.map(user => 
									<Roommate info={user} />
								)}
							</Panel>
					</Col>
				</div>
			</div>
		)
	} else {
		console.log('not loaded...', this.props.house.info)
		return (
			<div className="container">
				<h1>LOADING...</h1>
			</div>
			)
		}
	}
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
