import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getAppState } from '../actions/init/init';
import { updateUser } from '../actions/profile/profile';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../styles/theme-default';

import NoUserAlert from './loginNoUserAlert';

const logo = require('../assets/fridge-logo-black.svg');

class Change extends Component {
  constructor(props){
    super(props);
    this.state ={
      user_password: '',
      user_newpass: ''
    }
  }

  handleOnChange = (e) => {
    this.state.profile[e.target.dataset.field] = e.target.value.trim();
  };

  handleSubmit = (e) => {

  };

  render() {
      return (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <Grid fluid>
            <NoUserAlert />
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col md={4}>
                    <img src={logo} style={this.styles.logo} alt="Fridge" />
                    <Paper style={this.styles.paper}>
                      <h1>Login</h1>
                      <form onSubmit={event => this.handleClick(event)}>
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
                        <div>
                          <RaisedButton
                            label="Login"
                            primary={true}
                            style={{...this.styles.loginBtn, ...this.styles.btnSpan}}
                            type="submit"
                          />
                        </div>
                      </form>
                    </Paper>
                    <div style={this.styles.noAcctDiv}>
                      <div style={this.styles.noAcctQuestion}>
                        <span>Don't have an account?</span>
                      </div>
                        <FlatButton
                          label="Sign Up"
                          href="/signup"
                          style={this.styles.flatButton}
                          icon={<PersonAdd />}
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

function mapStateToProps({ userReducer }){
  user: userReducer
}

export default connect(mapStateToProps, { updateUser })(Change)
