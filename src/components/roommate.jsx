import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Roommate extends Component {
  constructor(props) {
    console.log('roommate props: ', props)
    super(props);
    this.roommate = props.roommate;
    this.phone = props.roommate.user_phone;
    this.state = {
      expanded: false,
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

  handleRemove(event) {
    console.log('remove target: ', this.roommate.user_id);
    this.props.remove(this.roommate.user_id);
    this.forceUpdate();

  }

  render() {
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
          {this.props.user.admin && this.roommate.user_id !== this.props.user.id &&
            <CardActions expandable={true}>
              <FlatButton
                style={{color: 'white'}} 
                backgroundColor='tomato' 
                hoverColor="grey"
                fullWidth={true}
                onClick={(event) => {this.handleRemove(event)}}
                >Remove</FlatButton>
            </CardActions>              
          }
        </Card>
        <br />
      </div>
    );
  }
}