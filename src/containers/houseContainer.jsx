import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions';
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
		this.props.getHouse(4)
	}

	render() {
		// const users = this.props.house.users;
		// const houseInfo = this.props.houseInfo;

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
	}
}

const mapStateToProps = ({ houseReducer }) => ({
	house: houseReducer,
})

const mapDispatchToProps = (dispatch) => {
	console.log('trying')
	return {
		getHouse: (id) => dispatch(getHouse(id)),
		addUser: (user) => dispatch(getUser(user)),
		updateHouseInfo: (item, value) => dispatch(updateHouseInfo({
			item,
			value
		}))
	}
}

// export default connect(
// 	mapStateToProps,
// 	{
// 		addUser,
// 		removeUser,
// 		updateHouseInfo
// 	}
// 	)(House)

export default connect(mapStateToProps, mapDispatchToProps)(House);
