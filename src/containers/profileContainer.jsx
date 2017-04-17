import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitProfile } from '../actions/profile/profile';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import ThemeDefault from '../styles/theme-default';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      profile: {
        user_first_name: this.props.user.user_first_name,
        user_last_name: this.props.user.user_last_name,
        user_email: this.props.user.user_email,
        user_phone: this.props.user.user_phone,
        user_birthday: this.props.user.user_birthday,
        user_info: this.props.user.user_info,
      },
    };
  }

  handleOnChange = (e) => {
    let field = e.target.dataset.field;
    this.state.profile[field] = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.submitProfile(this.state.profile)
      .then(response => {
        if (response === true) {
          return this.props.history.push('/profile');
        }
      });
  };

  render() {
    console.log(this.props);
    if (this.state.loaded === true) {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col md={4}>
                    <Paper>
                      <form>


          <input dbField={'user_first_name'} field={'First Name: '} data={this.props.user.user_first_name} />
          <input dbField={'user_last_name'} field={'Last Name: '} data={this.props.user.user_last_name} />
          <input dbField={'user_email'} field={'Email: '} data={this.props.user.user_email} />
          <input dbField={'user_phone'} field={'Phone Number: '} data={this.props.user.user_phone} />
          <input dbField={'user_birthday'} field={'Birthday: '} data={this.props.user.user_birthday} />
          <input dbField={'user_info'} field={'Info: '} data={this.props.user.user_data} />


                        <TextField
                          id="user_first_name"
                          hintText="this.props.user.user_first_name"
                          floatingLabelText="First Name"
                          fullWidth={true}
                          data-field="user_first_name"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          id="user_last_name"
                          hintText="Last Name"
                          floatingLabelText="Last Name"
                          fullWidth={true}
                          data-field="user_last_name"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          id="user_email"
                          hintText="Email"
                          floatingLabelText="Email"
                          fullWidth={true}
                          data-field="user_email"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          id="user_phone"
                          hintText="Phone"
                          floatingLabelText="Phone"
                          fullWidth={true}
                          data-field="user_phone"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <DatePicker
                          id="user_birthday"
                          hintText="Birthday"
                          fullWidth={true}
                          data-field="user_birthday"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <RaisedButton
                          label="Update"
                          primary={true}
                          type="submit"
                        />
                        <RaisedButton
                          label="Update"
                          primary={true}
                          // className={this.props.dbField}
                          // onClick={() => {
                          //   this.OnSubmit(this.props.submitProfile(
                          //     this.props.dbField,
                          //     this.refs.newData.value,
                          //     this.props.user.user_id,
                          //   ));
                          // }}
                          type="Submit"
                        />
                      </form>
                    </Paper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      );
    }
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    submitProfile,
  },
)(User);
