import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateHouseInfo, removeUser, addUser, getHouse } from '../actions/house/house.js';
import HouseInfo from '../components/houseInfo.jsx';
import Roommate from '../components/roommate.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';

class House extends Component {

  componentWillMount() {
    console.log('house props! ', this.props)
  }

	render() {
    const roommateList = this.props.house.users.sort((user1, user2) => {
      if (user1.user_id === this.props.currentUser.id) {
        return -1
      } else {
        return 1
      }
    });

		return (
			<Grid fluid>
				<Row>
					<Col xs={6}>
						<HouseInfo info={this.props.house}
						update={this.props.updateHouseInfo} currentUser={this.props.currentUser} />
					</Col>
					<Col xs={6}>
						{roommateList.map(user =>
							<Roommate history={this.props.history} roommate={user} currentUser={this.props.currentUser} remove={this.props.removeUser} />
						)}
				</Col>
			</Row>
		</Grid>
	)}
}

const mapStateToProps = ({ houseReducer, userReducer }) => ({
	house: houseReducer,
	currentUser: {
    admin: userReducer.user_is_admin === 1,
    id: userReducer.user_id
  }
})

export default withRouter(connect(
  mapStateToProps,
  {
    addUser,
    removeUser,
    updateHouseInfo,
    getHouse,
  },
)(House));

// export default connect(mapStateToProps, mapDispatchToProps)(House);
