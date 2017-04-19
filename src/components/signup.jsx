import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/auth/auth.js';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey500, white } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import { Card, CardText } from 'material-ui/Card';
import ThemeDefault from '../styles/theme-default';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const logo = require('../assets/fridge-logo-black.svg');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_phone: '',
      user_username: '',
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      user_password: '',
      expanded: false,
      firstBtn: {
        display: 'inline-block',
        marginTop: 15,
      },
      complete_signup: false,
    };
    this.styles = {
      logo: {
        width: 200,
        height: 'auto',
        margin: 20,
      },
      title: {
        fontSize: 24,
      },
      secondBtn: {
        marginTop: 15,
      },
      alreadyAcctDiv: {
        textAlign: 'center',
        padding: 20
      },
      alreadyAcctQuestion: {
        display: 'inline-block',
        position: 'relative',
        top: 4,
        margin: 10,
      },
      flatButton: {
        color: grey500
      },
    };
  }

  componentWillMount() {
    ValidatorForm.addValidationRule('longEnough', (value) => {
      return (value.length >= 8);
    });
    ValidatorForm.addValidationRule('isPhone', (value) => {
      const phonePattern = new RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);

      return (phonePattern.test(value));
    });
  }

  handleChange = (e) => {
    let field = e.target.name;
    this.setState({ [field]: e.target.value.trim() });
  };

  handleClick = (e) => {
    // e.preventDefault();

    axios.get(`/api/users/exists/${this.state.user_email}`)
      .then(response => {
        console.log(response.data)
        if (response.data === true) {
          alert('user already exists!');
        } else {
          this.setState({complete_signup: true, expanded: true, firstBtn: {display: 'none'}});
        }
      });
  };

  handleExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  };

  handleRegistration = (e) => {
    // e.preventDefault();

    this.props.registerUser(this.state)
      .then(response => {
        if (response === true) {
          return this.props.history.push('/welcome');
        }
      });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col md={4}>
                  <img src={logo} style={this.styles.logo} alt="Fridge" />
                  <Paper>
                    <ValidatorForm onSubmit={e => {this.handleRegistration(e)}} >
                      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={this.styles.card}>
                        <CardText>
                          <h2 style={this.styles.title}>Sign Up</h2>
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
                            hintText="Password"
                            floatingLabelText="Password"
                            fullWidth={true}
                            name="user_password"
                            onChange={e => {this.handleChange(e)}}
                            type="password"
                            value={this.state.user_password}
                            validators={['required', 'longEnough']}
                            errorMessages={['this field is required', 'your password should be at least 8 characters']}
                          />
                          <RaisedButton
                            label="Sign Up"
                            primary={true}
                            style={this.state.firstBtn}
                            onClick={e => this.handleClick(e)}
                          />
                        </CardText>
                        <CardText expandable={true}>
                          <h4>Almost there! Last couple things...</h4>
                          <TextValidator
                            hintText="First Name"
                            floatingLabelText="First Name"
                            fullWidth={true}
                            name="user_first_name"
                            onChange={e => {this.handleChange(e)}}
                            value={this.state.user_first_name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                          <TextValidator
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            fullWidth={true}
                            name="user_last_name"
                            onChange={e => {this.handleChange(e)}}
                            value={this.state.user_last_name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                          <TextValidator
                            hintText="Username"
                            floatingLabelText="Username"
                            fullWidth={true}
                            name="user_username"
                            onChange={e => {this.handleChange(e)}}
                            value={this.state.user_username}
                            validators={['required', 'longEnough']}
                            errorMessages={['this field is required', 'your username should be at least 8 characters']}
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
                          <RaisedButton
                            label="Sign Up"
                            primary={true}
                            style={this.styles.secondBtn}
                            type="submit"
                          />
                        </CardText>
                      </Card>
                    </ValidatorForm>
                  </Paper>
                  <div style={this.styles.alreadyAcctDiv}>
                    <div style={this.styles.alreadyAcctQuestion}>
                      <span>Already have an account?</span>
                    </div>
                    <FlatButton
                      label="Login"
                      href="/login"
                      style={this.styles.flatButton}
                      icon={<Person />}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(authReducer) {
  return {
    auth: authReducer,
  };
}

export default withRouter(connect(
  mapStateToProps, {
    registerUser,
  }
)(Register));
