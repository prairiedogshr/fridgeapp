import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

export default class Roommate extends Component {
  constructor(props) {
    super(props);
    this.roommate = props.roommate;
    this.phone = props.roommate.user_phone;
    this.state = {
      expanded: false,
      open: false,
      snackBarOpen: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSnackBarClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };

  handleRemove(event) {
    this.props.remove(this.roommate.user_id);
    this.setState({open: false});
  }

  handleUserRemove(event) {
    this.props.remove(this.roommate.user_id);
    this.props.history.push('/welcome');
    this.forceUpdate();
    this.setState({open: false, snackBarOpen: true });
  }

  render() {
    const DefaultAvatar = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAYiAAAAJGYzZGYxOTkwLTM0NjAtNDEwMC05ZWUzLWZkNGJmYjM5M2VlYg.jpg';
    const removeActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        />,
      <FlatButton
        label="Remove Roommate"
        backgroundColor='tomato'
        style={{ color: 'white' }}
        onTouchTap={this.handleRemove.bind(this)}
        />
      ];
    const userRemoveActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        />,
      <FlatButton
        label="Leave"
        backgroundColor='tomato'
        onTouchTap={this.handleUserRemove.bind(this)}
        />
      ];
    return (
      <div>
        <Card id={this.roommate.user_id} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.roommate.user_first_name + ' ' + this.roommate.user_last_name}
            avatar={require(`../assets/headshots/${this.roommate.user_first_name}.jpg` || DefaultAvatar)}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText  style={{ padding: '0 16px' }}>
          <p><strong>Email: </strong>{this.roommate.user_email}</p>
          <p><strong>Phone: </strong>{'(' + this.phone.slice(0,3) + ') ' + this.phone.slice(3,6) + '-' + this.phone.slice(6)}</p>
          </CardText>
          <CardText expandable={true} style={{ padding: '0 16px' }}>
            <p><strong>Birthday! </strong>{this.roommate.user_birthday}</p>
            <p><strong>Info: </strong>{this.roommate.user_info}</p>
          </CardText>
          {this.props.currentUser.admin && this.roommate.user_id !== this.props.currentUser.id &&
            <CardActions expandable={true}>
              <FlatButton
                style={{color: 'white'}}
                backgroundColor='tomato'
                hoverColor="grey"
                fullWidth={true}
                label="Remove"
                onTouchTap={this.handleOpen}
              />
              <Dialog
                title="Remove User"
                actions={removeActions}
                modal={true}
                open={this.state.open}
              >
                Would you like to remove {this.roommate.user_first_name} ?
              </Dialog>
            </CardActions>
          }
           {this.roommate.user_id === this.props.currentUser.id &&
            <CardActions expandable={true}>
              <FlatButton
                style={{color: 'white'}}
                backgroundColor='tomato'
                hoverColor="grey"
                fullWidth={true}
                label="Leave House"
                onTouchTap={this.handleOpen}
              />
              <Dialog
                title="Leave House"
                actions={userRemoveActions}
                modal={true}
                open={this.state.open}
              >
                Would you like to leave the house, {this.roommate.user_first_name} ?
              </Dialog>
            </CardActions>
          } 
        </Card>
        <Snackbar
          open={this.state.snackBarOpen}
          message="Roommate removed."
          autoHideDuration={3000}
          onRequestClose={this.handleSnackBarClose}
          contentStyle={{ textAlign: 'center' }}
        />
      </div>
    );
  }
}