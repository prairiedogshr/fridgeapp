import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';

export default class HouseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      snackBarOpen: false,
    };
    this.styles = {
      paper: {
        padding: 20,
        overflow: 'auto',
      },
      textField: {
        fontSize: 14,
        margin: 0,
      },
    };
    this.houseUpdateParams = {
      house_address: '',
      house_unit_number: '',
      house_city: '',
      house_state: '',
      house_zip: '',
      house_info: '',
    };
  }

  handleSnackBarClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };

  handleSubmit(event) {
    let update = {};
    for (let key in this.houseUpdateParams) {
      if (this.houseUpdateParams[key]) {
        update[key] = this.houseUpdateParams[key];
      }
    };
    this.props.update(update)
      .then(() => {
        this.setState({
          editing: false,
          snackBarOpen: true,
        });
      });
  }

  render() {
    if (this.state.editing) {
      return (
        <div>
          <Card expanded={false} id="houseInfoEdit">
            <CardMedia>
              {/* We could add a house url here.. */}
              <img src="http://cdn.history.com/sites/2/2015/07/hith-white-house-attacks-E.jpeg" alt="Your House" />
            </CardMedia>
            <Paper style={this.styles.paper}>
              <TextField
                id="houseAddressEdit"
                floatingLabelText={this.props.info.house_address}
                hintText="Address"
                fullWidth={true}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_address = e.target.value
                }}
              />
              <TextField
                id="houseAddress2Edit"
                floatingLabelText={this.props.info.house_unit_number}
                hintText="Unit"
                fullWidth={true}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_unit_number = e.target.value
                }}
              />
              <TextField
                id="houseCityEdit"
                floatingLabelText={this.props.info.house_city}
                hintText="City"
                fullWidth={true}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_city = e.target.value
                }}
              />
              <TextField
                id="houseStateEdit"
                floatingLabelText={this.props.info.house_state}
                hintText="State"
                fullWidth={true}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_state = e.target.value
                }}
              />
              <TextField
                id="houseZipEdit"
                floatingLabelText={this.props.info.house_zip}
                hintText="Zip"
                fullWidth={true}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_zip = e.target.value
                }}
              />
              <br />
              <TextField
                id="houseInfoEdit"
                floatingLabelText={this.props.info.house_info}
                hintText="Info"
                fullWidth={true}
                multiLine={true}
                rowsMax={8}
                style={this.styles.textField}
                onKeyUp={(e) => {
                  this.houseUpdateParams.house_info = e.target.value
                }}
              />
              <br />
              <br />
              <CardMedia>
                <FlatButton
                  style={{ color: 'white' }}
                  backgroundColor={'grey'}
                  hoverColor="tomato"
                  fullWidth={false}
                  onClick={(event) => {
                    this.handleSubmit(event);
                  }}
                >Save</FlatButton>
              </CardMedia>
            </Paper>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <Card expanded={false} id="houseInfoUser">
            <CardMedia>
              <img src="http://cdn.history.com/sites/2/2015/07/hith-white-house-attacks-E.jpeg" alt="Your House" />
            </CardMedia>
            <CardText>
              <p><strong>Address: </strong>{this.props.info.house_address}</p>
              <p><strong>Address 2: </strong>{this.props.info.house_unit_number}</p>
              <p><strong>City: </strong>{this.props.info.house_city}</p>
              <p><strong>State: </strong>{this.props.info.house_state}</p>
              <p><strong>Zip: </strong>{this.props.info.house_zip}</p>
              <br />
              <p><strong>House Info: </strong>{this.props.info.house_info}</p>
            </CardText>
            {this.props.currentUser.admin &&
            <FlatButton
              style={{ color: 'white' }}
              backgroundColor={'grey'}
              hoverColor="tomato"
              fullWidth={false}
              onClick={() => {
                this.setState({
                  editing: true,
                });
              }}
            >Edit</FlatButton>}
          </Card>
          <Snackbar
            open={this.state.snackBarOpen}
            message="House updated!"
            autoHideDuration={3000}
            onRequestClose={this.handleSnackBarClose}
            contentStyle={{ textAlign: 'center' }}
          />
        </div>
      );
    }
  }
}
