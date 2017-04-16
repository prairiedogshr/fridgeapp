import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house.js';
import HouseInfo from '../components/houseInfo.jsx';
import Roommate from '../components/roommate.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';

class House extends Component {

  componentWillMount() {
    console.log('rendering with props: ', this.props);
  }

	render() {
		return (
			<Grid fluid>
				<Row>
					<Col xs={6}>
						<HouseInfo info={this.props.house} 
						update={this.props.updateHouseInfo} admin={this.props.admin} />
					</Col>
					<Col xs={6}>
						{this.props.house.users.map(user => 
							<Roommate roommate={user} admin={this.props.admin} />
						)}
				</Col>
			</Row>
		</Grid>
	)}
}

const mapStateToProps = ({ houseReducer, userReducer }) => ({
	house: houseReducer,
	admin: userReducer.user_is_admin === 1,
})

export default connect(
  mapStateToProps,
  {
    addUser,
    removeUser,
    updateHouseInfo,
    getHouse,
  },
)(House);

// export default connect(mapStateToProps, mapDispatchToProps)(House);
