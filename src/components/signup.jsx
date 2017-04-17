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
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import ThemeDefault from '../styles/theme-default';
const logo = require('../assets/fridge-logo-black.svg');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        user_phone: '',
        user_username: '',
        user_first_name: '',
        user_last_name: '',
        user_email: '',
        user_password: '',
      },
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
        fontSize: 32,
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

  handleClick = (e) => {
    e.preventDefault();

    axios.get(`/api/users/exists/${document.getElementById("emailInput").value.trim()}`)
      .then(response => {
        if (response.data === true) {
          alert('user already exists!');
        } else {
          let creds = this.state.creds;
          creds.user_email = document.getElementById("emailInput").value.trim();
          creds.user_password = document.getElementById("passwordInput").value.trim();
          this.setState({complete_signup: true, expanded: true, firstBtn: {display: 'none'}});
        }
      });
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleKeyUp = (e) => {
    console.log(e.target.dataset.field);
    let field = e.target.dataset.field;
    this.state.creds[field] = e.target.value;
  };

  handleRegistration = (e) => {
    e.preventDefault();

    this.props.registerUser(this.state.creds)
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
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={this.styles.card}>
                      <CardText>
                        <h1 style={this.styles.title}>Sign Up</h1>
                        <TextField
                          id="emailInput"
                          hintText="E-mail"
                          floatingLabelText="E-mail"
                          fullWidth={true}
                        />
                        <TextField
                          id="passwordInput"
                          hintText="Password"
                          floatingLabelText="Password"
                          fullWidth={true}
                          type="password"
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
                        <TextField
                          id="user_first_name"
                          hintText="First Name"
                          floatingLabelText="First Name"
                          fullWidth={true}
                          data-field="user_first_name"
                          onKeyUp={e => {handleKeyUp(e)}}
                        />
                        <TextField
                          id="user_last_name"
                          hintText="Last Name"
                          floatingLabelText="Last Name"
                          fullWidth={true}
                          data-field="user_last_name"
                          onKeyUp={e => {handleKeyUp(e)}}
                        />
                        <TextField
                          id="user_username"
                          hintText="Username"
                          floatingLabelText="Username"
                          fullWidth={true}
                          data-field="user_username"
                          onKeyUp={e => {handleKeyUp(e)}}
                        />
                        <TextField
                          id="user_phone"
                          hintText="Phone"
                          floatingLabelText="Phone"
                          fullWidth={true}
                          data-field="user_phone"
                          onKeyUp={e => {handleKeyUp(e)}}
                        />
                        <RaisedButton
                          label="Sign Up"
                          primary={true}
                          style={this.styles.secondBtn}
                          onClick={e => this.handleRegistration(e)}
                        />
                      </CardText>
                    </Card>
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
