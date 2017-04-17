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

  render() {
    console.log(this.props.admin)
    return (
      <div className="roommateCard">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          {this.props.admin &&
            <CardActions expandable={true}>
              <FlatButton
                style={{color: 'white'}} 
                backgroundColor='tomato' 
                hoverColor="grey"
                fullWidth={true}
                >Remove</FlatButton>
            </CardActions>              
          }
        </Card>
        <br />
      </div>
    );
  }
}