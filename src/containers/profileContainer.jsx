import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitProfile } from '../actions/profile/profile';
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
    this.styles = {
      paper: {
        padding: 16,
        overflow: 'auto'
      },
      btn: {
        marginTop: 15,
        marginBottom: 6,
      },
    };
  }

  handleOnChange = (e) => {
    this.state.creds[e.target.dataset.field] = e.target.value.trim();
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
    if (this.state.loaded === true) {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col md={4}>
                    <Paper style={this.styles.paper}>
                      <form onSubmit={e => this.handleSubmit(e)}>
                        <TextField
                          floatingLabelText="First Name"
                          defaultValue={this.state.profile.user_first_name}
                          fullWidth={true}
                          data-field="user_first_name"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          floatingLabelText="Last Name"
                          defaultValue={this.state.profile.user_last_name}
                          fullWidth={true}
                          data-field="user_last_name"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          floatingLabelText="Email"
                          defaultValue={this.state.profile.user_email}
                          fullWidth={true}
                          data-field="user_email"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <TextField
                          floatingLabelText="Phone"
                          defaultValue={this.state.profile.user_phone}
                          fullWidth={true}
                          data-field="user_phone"
                          onChange={e => {this.handleOnChange(e)}}
                        />
                        <DatePicker
                          floatingLabelText="Birthday"
                          fullWidth={true}
                          defaultValue={this.state.profile.user_birthday}
                          data-field="user_birthday"
                          onSubmit={e => {this.handleOnChange(e)}}
                        />
                        <RaisedButton
                          label="Update"
                          primary={true}
                          style={this.styles.btn}
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
