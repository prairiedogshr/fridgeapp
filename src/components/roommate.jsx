import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';

export default class Roommate extends Component {
  constructor(props) {
    super(props);
    console.log('all props! ', props)
    this.roommate = props.roommate;
    this.phone = props.roommate.user_phone;
    this.state = {
      expanded: false,
      open: false
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
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

  handleRemove(event) {
    this.props.remove(this.roommate.user_id);
    this.setState({open: false});

  }

  handleUserRemove(event) {
    this.props.remove(this.roommate.user_id);
    this.props.history.push('/welcome');
  }

  render() {
    const removeActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        />,
      <FlatButton
        label="Remove Roommate"
        backgroundColor='tomato'
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
      ]
    return (
      <div className="roommateCard">
        <Card id={this.roommate.user_id} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.roommate.user_first_name + ' ' + this.roommate.user_last_name}
            avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAYiAAAAJGYzZGYxOTkwLTM0NjAtNDEwMC05ZWUzLWZkNGJmYjM5M2VlYg.jpg"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          <p><strong>Email: </strong>{this.roommate.user_email}</p>
          <p><strong>Phone: </strong>{'(' + this.phone.slice(0,3) + ') ' + this.phone.slice(3,6) + '-' + this.phone.slice(6)}</p>
          </CardText>
          <CardText expandable={true}>
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
        <br />
      </div>
    );
  }
}