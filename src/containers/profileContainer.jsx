import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/profile/profile';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ThemeDefault from '../styles/theme-default';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.user_id,
      house_in_user: this.props.user.house_in_admin || null,
      user_first_name: this.props.user.user_first_name,
      user_last_name: this.props.user.user_last_name,
      user_email: this.props.user.user_email || null,
      user_phone: this.props.user.user_phone || null,
      user_birthday: this.props.user.user_birthday || null,
      user_info: this.props.user.user_info || null,
      user_chore_rotation: this.props.user.user_chore_rotation || null,
      snackBarOpen: false,
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
      loadContainer: {
        position: 'relative',
      },
      loadRefresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
  }

  componentWillMount() {
    ValidatorForm.addValidationRule('isPhone', (value) => {
      const phonePattern = new RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);

      return (phonePattern.test(value));
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  handleDateChange = (e, date) => {
    this.setState({ user_birthday: date });
  };

  handleSnackBarClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();

    this.props.updateUser(this.state)
      .then(response => {
        if (response) {
          this.setState({
            snackBarOpen: true,
          });
        }
      });
  };

  render() {

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4 text-center">
                  <Paper style={this.styles.paper}>
                    <ValidatorForm onSubmit={e => {this.handleSubmit(e)}}>
                      <TextField
                        floatingLabelText="First Name"
                        defaultValue={this.state.user_first_name}
                        fullWidth={true}
                        name="user_first_name"
                        onChange={e => {this.handleChange(e)}}
                      />
                      <TextField
                        floatingLabelText="Last Name"
                        defaultValue={this.state.user_last_name}
                        fullWidth={true}
                        name="user_last_name"
                        onChange={e => {this.handleChange(e)}}
                      />
                      <TextValidator
                        hintText="E-mail"
                        floatingLabelText="E-mail"
                        fullWidth={true}
                        name="user_email"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.user_email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                      />
                      <TextValidator
                        hintText="Phone"
                        floatingLabelText="Phone"
                        fullWidth={true}
                        name="user_phone"
                        onChange={e => {this.handleChange(e)}}
                        value={this.state.user_phone}
                        validators={['required', 'isPhone']}
                        errorMessages={['this field is required', 'phone is not valid']}
                      />
                      <DatePicker
                        floatingLabelText="Birthday"
                        fullWidth={true}
                        defaultDate={(this.state.user_birthday) ? new Date(this.state.user_birthday) : undefined}
                        name="user_birthday"
                        onChange={(e, date) => {this.handleDateChange(e, date)}}
                      />
                      <TextField
                        floatingLabelText="Info"
                        defaultValue={this.state.user_info}
                        fullWidth={true}
                        name="user_info"
                        onChange={e => {this.handleChange(e)}}
                      />
                      <RaisedButton
                        label="Update"
                        primary={true}
                        style={this.styles.btn}
                        type="Submit"
                      />
                      <div className="clearfix" style={{ height: 15 }}></div>
                      <FlatButton
                        label="Change Password &raquo;"
                        secondary={true}
                        icon={<LockOutline />}
                        href= "/change"
                      />
                    </ValidatorForm>
                    <Snackbar
                      open={this.state.snackBarOpen}
                      message="Profile updated!"
                      autoHideDuration={3000}
                      onRequestClose={this.handleSnackBarClose}
                      contentStyle={{ textAlign: 'center' }}
                    />
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    updateUser,
  },
)(User);
