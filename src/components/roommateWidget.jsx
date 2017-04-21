import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Phone from 'material-ui/svg-icons/communication/phone';

class RoommateWidget extends Component {

  static propTypes = {
    widgetID: React.PropTypes.string,
    icon: React.PropTypes.string,
    headerText: React.PropTypes.string,
    footerText: React.PropTypes.string,
    linkTo: React.PropTypes.string,
  };
  //
  // handleRequestDelete = () => {
  //   this.setState({
  //     snackBarOpen: false,
  //   });
  // };

  render() {
    const DefaultAvatar = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAYiAAAAJGYzZGYxOTkwLTM0NjAtNDEwMC05ZWUzLWZkNGJmYjM5M2VlYg.jpg';
    const roommateList = this.props.house.users.sort((user1, user2) => {
      if (user1.user_id === this.props.currentUser.id) {
        return -1;
      }
      return 1;
    });
    const justRoommates = roommateList.slice(1);

    return (
      <div id={this.props.widgetID}>
        <Paper className="paper-wrapper">
          <div className="row">
            <div className="col-xs-4">
              <div className="icon">
                <i className="material-icons">{this.props.icon}</i>
              </div>
            </div>
            <div className="col-xs-8">
              <div className="title" style={{ margin: '10px 0 15px' }}>
                {this.props.headerText}
              </div>
            </div>
          </div>
          <Divider style={{ margin: '12px 0 8px' }} />
          <div className="row">
            <div className="col-xs-12">
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {justRoommates.map(roommate =>
                  <Chip
                    style={{ margin: 4, cursor: 'pointer' }}
                    labelStyle={{ fontSize: 12 }}
                    href={`tel:${roommate.user_phone}`}
                  >
                    <Avatar src={require(`../assets/headshots/${roommate.user_first_name}.jpg` || DefaultAvatar)} alt={roommate.user_first_name} />
                    {roommate.user_first_name}
                    <Phone style={{ width: 16, height: 16, marginLeft: 4, fill: '#551a8b', verticalAlign: 'text-bottom' }} />
                  </Chip>
                )}
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ houseReducer, userReducer }) => ({
  house: houseReducer,
  currentUser: {
    admin: userReducer.user_is_admin === 1,
    id: userReducer.user_id,
  },
});

export default connect(mapStateToProps)(RoommateWidget);
